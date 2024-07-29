import styled from "styled-components";

export const DocumentBox = styled.div`
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
