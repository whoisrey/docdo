import axiosInstance from "./instance";

const fetchDocuments = async () => {
  try {
    const response = await axiosInstance.get("/documents");
    return response.data;
  } catch (error) {
    throw error;
  }
};

const fetchDocumentById = async (id) => {
  try {
    const response = await axiosInstance.get(`/documents/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const createDocument = async (title, content) => {
  try {
    const response = await axiosInstance.post("/documents", { title, content });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const updateDocument = async (id, title, content) => {
  try {
    const response = await axiosInstance.put(`/documents/${id}`, {
      title,
      content,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const deleteDocument = async (id) => {
  try {
    const response = await axiosInstance.delete(`/documents/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export {
  fetchDocuments,
  fetchDocumentById,
  createDocument,
  updateDocument,
  deleteDocument,
};
