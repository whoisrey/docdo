import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

import { fetchDocumentById, updateDocument, deleteDocument } from "../services/documents";

import { EditorContainer, TitleContainer, ContentContainer, ButtonContainer } from "./DocumentEditorStyle";

const DocumentEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [users, setUsers] = useState(0);
  const [cursors, setCursors] = useState({});

  const socketRef = useRef();
  const textareaRef = useRef();

  useEffect(() => {
    socketRef.current = io(process.env.REACT_APP_API_URL);

    socketRef.current.emit("joinDocument", id);

    socketRef.current.on("userJoined", (userCount) => {
      setUsers(userCount);
    });

    socketRef.current.on("userLeft", (userCount) => {
      setUsers(userCount);
    });

    socketRef.current.on("documentEdit", (data) => {
      const { content: newContent, cursorPosition } = data;

      setContent(newContent);

      setCursors((prev) => ({ ...prev, [data.socketId]: cursorPosition }));
    });

    socketRef.current.on("cursorUpdate", (cursorData) => {
      setCursors(cursorData);
    });

    return () => {
      socketRef.current.emit("leaveDocument", id);
      socketRef.current.disconnect();
    };
  }, [id]);

  useEffect(() => {
    const loadDocument = async () => {
      const document = await fetchDocumentById(id);

      setTitle(document.title);
      setContent(document.content);
    };

    loadDocument();
  }, [id, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSave();
    }, 20000);

    return () => clearInterval(interval);
  }, [title, content]);

  const handleSave = async () => {
    await updateDocument(id, title, content);
  };

  const handleDelete = async () => {
    await deleteDocument(id);

    navigate("/documents");
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);

    const cursorPosition = textareaRef.current.selectionStart;

    socketRef.current.emit("documentEdit", { documentId: id, content: event.target.value, cursorPosition });
  };

  const renderCursors = () => {
    return Object.entries(cursors).map(([socketId, cursorPosition]) => {
      const cursorStyle = {
        left: `${cursorPosition}px`,
        top: '0px',
        position: 'absolute',
        backgroundColor: 'red',
        width: '2px',
        height: '20px',
      };

      return <div key={socketId} style={cursorStyle} />;
    });
  };

  return (
    <EditorContainer>
      <h1 className="a11y-hidden">문서 편집하기</h1>
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
          ref={textareaRef}
          value={content}
          onChange={handleContentChange}
        />
        {renderCursors()}
      </ContentContainer>
      <ButtonContainer>
        <button onClick={handleSave}>
          남기기
        </button>
        <button onClick={handleDelete} className="delete-button">
          지우기
        </button>
      </ButtonContainer>
      <div>현재 접속자 수: {users}</div>
    </EditorContainer>
  );
};

export default DocumentEditor;
