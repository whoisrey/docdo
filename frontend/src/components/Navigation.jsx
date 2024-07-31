import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth } from "../firebase";

import UserLogin from "./UserLogin";

import { Navbar, NavList, NavItem, NavButton } from "./NavigationStyle";

import writingLogo from "../assets/logo.png"

const Navigation = ({ closeModal }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await auth.signOut();

    localStorage.removeItem("token");

    navigate("/");
  };

  return (
    <Navbar>
      <h1 className="a11y-hidden">상단 목록</h1>
      <NavList>
        <NavItem>
          <Link to="/">
            <img src={writingLogo} onClick={closeModal} alt="글 쓰는 소년"/>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/documents">내 문서</Link>
        </NavItem>
        <NavItem>
          <Link to="/documents/new">문서 작성</Link>
        </NavItem>
      </NavList>
      <NavList>
        <NavItem >
          {isLoggedIn ? (
            <NavButton onClick={handleLogout}>나가기</NavButton>
          ) : (
            <UserLogin />
          )}
        </NavItem>
      </NavList>
    </Navbar>
  );
};

export default Navigation;
