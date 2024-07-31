import { Link } from "react-router-dom";

import { DocumentContainer, DateContainer, CreatedDate, UpdatedDate } from "./DocumentStyle";

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric'};
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Document = ({ document }) => {
  return (
    <DocumentContainer>
      <h1 className="a11y-hidden">개별 문서</h1>
      <Link to={`/documents/${document._id}`} >
        <h2>제목: {document.title}</h2>
        <DateContainer>
          <CreatedDate>
            <p className="created-at">생성 날짜:</p>
            <span>{formatDate(document.createdAt)}</span>
          </CreatedDate>
          <UpdatedDate>
            <p className="updated-at">수정된 날짜:</p>
            <span>{formatDate(document.updatedAt)}</span>
          </UpdatedDate>
        </DateContainer>
      </Link>
    </DocumentContainer>
  );
};

export default Document;
