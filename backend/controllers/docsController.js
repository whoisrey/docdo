const createError = require("http-errors");

const Document = require("../models/Document");

const renderDocs = async (req, res, next) => {
  try {
    const documents = await Document.find(
      req.user?.uid ? { writers: req.user.uid } : {}
    );

    res.json(documents);
  } catch (error) {
    next(createError(500, "문서를 불러올 수 없습니다."));
  }
};

const renderUserDocs = async (req, res, next) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      next(createError(404, "해당 문서를 찾을 수 없습니다."));
      return;
    }

    if (!document.writers.includes(req.user.uid)) {
      next(createError(403, "접근할 수 없습니다."));
      return;
    }

    res.json(document);
  } catch (error) {
    next(createError(500, "문서를 불러올 수 없습니다."));
  }
};

const createDocs = async (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    next(createError(400, "제목과 내용을 입력하세요."));
    return;
  }

  try {
    const document = new Document({
      title,
      content,
      writers: [req.user.uid],
    });

    await document.save();

    res.status(201).json(document);
  } catch (error) {
    next(createError(500, "문서를 생성할 수 없습니다."));
  }
};

const modifyDocs = async (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "제목과 내용을 입력하세요." });
  }

  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      next(createError(404, "해당 문서를 찾을 수 없습니다."));
      return;
    }

    if (!document.writers.includes(req.user.uid)) {
      next(createError(403, "접근할 수 없습니다."));
      return;
    }

    document.title = title;
    document.content = content;

    await document.save();

    res.json(document);
  } catch (error) {
    next(createError(500, "문서를 수정할 수 없습니다."));
  }
};

const deleteDocs = async (req, res, next) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      next(createError(404, "해당 문서를 찾을 수 없습니다."));
      return;
    }

    if (!document.writers.includes(req.user.uid)) {
      next(createError(403, "접근할 수 없습니다."));
      return;
    }

    const deletedDocument = await Document.findByIdAndDelete(document);

    res.json(deletedDocument);
  } catch (error) {
    next(createError(500, "문서를 삭제할 수 없습니다."));
  }
};

module.exports = {
  renderDocs,
  renderUserDocs,
  createDocs,
  modifyDocs,
  deleteDocs,
};
