import { useNavigate } from "react-router-dom";

import { ModalBackground, ModalContainer, ButtonContainer } from "./ModalStyle";
import { getAuth, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../firebase";

import axios from "axios";
import config from "../config";

const LoginModal = ({ onClose }) => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken(true);

      const response = await axios.post(`${config.API_URL}/auth/google`, {
        idToken,
      });

      localStorage.setItem("token", response.data.token);

      navigate("/documents");
      onClose();
    } catch (error) {
      console.error("Error logging in with Google", error);
    }
  };


  return (
    <ModalBackground>
      <ModalContainer>
        <h2>계정이 필요합니다.</h2>
        <p>구글 아이디는 있으시죠?</p>
        <ButtonContainer>
          <button onClick={onClose}>닫기</button>
          <button onClick={handleGoogleLogin}>로그인</button>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackground>
  );
};

export default LoginModal;
