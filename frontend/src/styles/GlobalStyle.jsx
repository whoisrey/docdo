import { createGlobalStyle, styled } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
    font-family: "East Sea Dokdo", sans-serif;
  }

  :root {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  body {
    color: inherit;
    font-family: "East Sea Dokdo", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ol, ul, li {
    list-style: none;
  }

  button {
    box-shadow: none;
    border: none;
    padding: 0;
    background-color: inherit;
    color: inherit;
    cursor: pointer;
  }

  textarea {
    border: none;
    overflow: none;
    outline: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none;
  }

  button, input, textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
    border: none;
  }

  img {
    width: 100%;
    vertical-align: middle;
  }

  .a11y-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  @media (max-width: 768px) {
    :root {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }

  @media (max-width: 480px) {
    :root {
      font-size: ${({ theme }) => theme.fontSize.xsmall};
    }
  }

  @media (max-width: 375px) {
    :root {
      font-size: ${({ theme }) => theme.fontSize.xxsmall};
    }
  }
`;

export const Container = styled.div`
  padding-top: 8rem;

  @media (max-width: 768px) {
    padding-top: 6rem;
  }

  @media (max-width: 480px) {
    padding-top: 20rem;
  }
`;
