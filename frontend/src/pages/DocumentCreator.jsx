import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createDocument } from "../services/documents";

import { CreatorContainer, TitleContainer, ContentContainer, ButtonContainer } from "./DocumentCreatorStyle";

const DocumentCreator = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const handleCreate = async () => {
    try {
      const document = await createDocument(title, content);

      navigate(`/documents/${document._id}`);
    } catch (error) {
      console.error("Error creating document", error);

      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  };

  return (
    <CreatorContainer>
      <h1 className="a11y-hidden">문서 만들기</h1>
      <TitleContainer>
        <h2>제목: </h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </TitleContainer>
      <ContentContainer>
        <h2>내용: </h2>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </ContentContainer>
      <ButtonContainer>
        <button onClick={handleCreate}>만들기</button>
      </ButtonContainer>
    </CreatorContainer>
  );
};

export default DocumentCreator;
