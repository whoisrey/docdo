import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../firebase";

import { LoginContainer } from "./UserLoginStyle";

import GoogleLogo from "../assets/google.png"
import axios from "axios";


const UserLogin = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken(true);

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/google`, {
        idToken,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/documents");
    } catch (error) {
      console.error("Error logging in with Google", error);
    }
  };

  return (
    <LoginContainer>
      <h1 className="a11y-hidden">입장하기</h1>
      <img src={GoogleLogo} className="google-logo" alt="구글 흑백 로고"/>
      <button onClick={handleGoogleLogin}>구글로 입장하기</button>
    </LoginContainer>
  );
};

export default UserLogin;
