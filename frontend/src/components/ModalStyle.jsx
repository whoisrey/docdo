import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 0.5rem;
    border: 1px solid ${({ theme }) => theme.color.blackColor};
    border-radius: 20px;
  }

  button:hover {
    background: ${({ theme }) => theme.color.lightGrayColor};
    transition: all 1s;
  }
`
