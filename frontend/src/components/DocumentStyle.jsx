import styled from "styled-components";

export const DocumentContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem;
  position: relative;
  padding-bottom: 1rem;

  &:after {
    content: '';
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.blackColor};
    transition: width 1s ease;
  }

  &:hover:after {
    width: 100%;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xlarge};
  }
`

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 0.5rem;

  span {
    font-weight: bold;
  }
`

export const CreatedDate = styled.div`
  display: flex;
  gap: 0.4rem;
`

export const UpdatedDate = styled.div`
  display: flex;
  gap: 0.4rem;

  span {
    color: ${({ theme }) => theme.color.redColor};
  }
`
