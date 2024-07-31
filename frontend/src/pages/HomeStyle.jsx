import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 4rem;
  flex-wrap: wrap;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  font-size: ${({ theme }) => theme.fontSize.xxlarge};

  .title {
    color: ${({ theme }) => theme.color.darkGrayColor};
  }
  `;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  font-family: monospace;
  font-size: ${({ theme }) => theme.fontSize.xxxsmall};
  color: ${({ theme }) => theme.color.darkGrayColor};

  .slogan {
    color: ${({ theme }) => theme.color.darkTealColor};
  }

  strong {
    font-weight: bold;
    color: ${({ theme }) => theme.color.darkTealColor};
  }
`

const typing = keyframes`
  0% { width: 0; }
  70% { width: 100%; }
  100% { width: 100%; }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: black; }
`;

export const TextAnime = styled.div`
  p {
    color: ${({ theme }) => theme.color.blackColor};
    overflow: hidden;
    border-right: .15em solid black;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation:
      ${typing} 3.5s steps(30, end) infinite,
      ${blinkCaret} .75s step-end infinite;
    animation-delay: 0s, 3.5s;
  }
`;
