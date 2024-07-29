import styled from "styled-components";

export const CreatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  margin: 2rem;
  border: 4px solid ${({ theme }) => theme.color.blackColor};
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
