import styled from "styled-components";

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 8rem;
  flex-wrap: wrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 1rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxlarge};
  }

  input {
    outline: none;
    font-size: ${({ theme }) => theme.fontSize.medium};
    border: 4px solid ${({ theme }) => theme.color.blackColor};
  }
`

export const ContentContainer = styled.div`
  display: flex;
  gap: 1rem;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxlarge};
  }
  textArea {
    border: 4px solid ${({ theme }) => theme.color.blackColor};
    font-size: ${({ theme }) => theme.fontSize.large};
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  font-size: ${({ theme }) => theme.fontSize.medium};

  .delete-button {
    color: ${({ theme }) => theme.color.redColor};
    font-weight: bold;
  }
`
