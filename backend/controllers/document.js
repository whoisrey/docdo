const Document = require("../models/Document");

const renderDocs = async (req, res) => {
  try {
    const documents = await Document.find({ writers: req.user.uid });

    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: "문서를 불러올 수 없습니다." });
  }
};

const renderUserDocs = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({ error: "해당 문서를 찾을 수 없습니다." });
    }

    if (!document.writers.includes(req.user.uid)) {
      return res.status(403).json({ error: "접근할 수 없습니다." });
    }

    res.json(document);
  } catch (error) {
    res.status(500).json({
      error: "문서를 불러올 수 없습니다.",
      details: error.message,
    });
  }
};

const createDocs = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "제목과 내용을 입력하세요." });
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
    res.status(500).json({
      error: "문서를 생성할 수 없습니다.",
      details: error.message,
    });
  }
};

const modifyDocs = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: "제목과 내용을 입력하세요." });
  }

  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({ error: "해당 문서를 찾을 수 없습니다." });
    }

    if (!document.writers.includes(req.user.uid)) {
      return res.status(403).json({ error: "접근할 수 없습니다." });
    }

    document.title = title;
    document.content = content;

    await document.save();

    res.json(document);
  } catch (error) {
    res.status(500).json({ error: "문서를 수정할 수 없습니다." });
  }
};

const deleteDocs = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);

    if (!document) {
      return res.status(404).json({ error: "해당 문서를 찾을 수 없습니다." });
    }

    if (!document.writers.includes(req.user.uid)) {
      return res.status(403).json({ error: "접근할 수 없습니다." });
    }

    const deletedDocument = await Document.findByIdAndDelete(document);

    res.json(deletedDocument);
  } catch (error) {
    res.status(500).json({ error: "문서를 삭제할 수 없습니다." });
  }
};

module.exports = {
  renderDocs,
  renderUserDocs,
  createDocs,
  modifyDocs,
  deleteDocs,
};
