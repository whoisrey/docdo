import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  padding-right: 3rem;
  background-color: ${({ theme }) => theme.color.whiteColor};
  color: ${({ theme }) => theme.color.blackColor};
  border-bottom: 5px solid ${({ theme }) => theme.color.grayColor};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 0.5rem;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 3rem;
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fontSize.medium};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const NavItem = styled.li`
  margin: 0 10px;

  img {
    width: 6rem;
  }

  &:hover {
    color: ${({ theme }) => theme.color.darkTealColor};
    font-weight: bold;
    transition: all 1s ease;
  }

  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.redColor};
    font-weight: bold;
    transition: all 1s ease;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;
