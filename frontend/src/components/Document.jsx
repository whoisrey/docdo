import React from "react";
import { Link } from "react-router-dom";

import { DocumentBox } from "./DocumentStyle";

const Document = ({ document }) => {
  return (
    <DocumentBox>
      <h1 className="a11y-hidden">개별 문서</h1>
      <Link to={`/documents/${document._id}`} >
        <h2>제목: {document.title}</h2>
      </Link>
    </DocumentBox>
  );
};

export default Document;
