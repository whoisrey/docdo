import React, { useEffect, useState } from "react";

import Document from "../components/Document";

import { fetchDocuments } from "../services/documents";

import { DocumentContainer } from "./DocumentListStyle";

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const data = await fetchDocuments();
        
        setDocuments(data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    loadDocuments();
  }, []);

  return (
    <DocumentContainer>
      <h1 className="a11y-hidden">내 문서 목록</h1>
      {documents.map((document) => (
        <Document key={document._id} document={document} />
      ))}
    </DocumentContainer>
  );
};

export default DocumentList;
