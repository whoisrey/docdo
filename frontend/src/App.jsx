import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import DocumentList from "./pages/DocumentList";
import DocumentEditor from "./pages/DocumentEditor";
import DocumentCreator from "./pages/DocumentCreator";

import Navigation from "./components/Navigation";
import Modal from "./components/Modal";

import { auth } from "./firebase";
import { signOut } from "firebase/auth";

import Theme from "./styles/Theme";
import { GlobalStyle, Container } from "./styles/GlobalStyle";

const PrivateRoute = ({ component: Component, showModal }) => {
  const location = useLocation();

  useEffect(() => {
    if (!auth.currentUser) {
      showModal();
    }
  }, [auth.currentUser, location, showModal]);

  return auth.currentUser ? <Component /> : <Navigate to="/" />;
};
const App = () => {
  const [isLogin, showIsLogin] = useState(false);

  useEffect(() => {
    signOut(auth);
  }, []);

  const showModal = () => {
    showIsLogin(true);
  };

  const closeModal = () => {
    showIsLogin(false);
  };

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Navigation closeModal={closeModal}/>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<PrivateRoute component={DocumentList} showModal={showModal} />} />
            <Route path="/documents/new" element={<PrivateRoute component={DocumentCreator} showModal={showModal} />} />
            <Route path="/documents/:id" element={<PrivateRoute component={DocumentEditor} showModal={showModal} />} />
          </Routes>
        </Container>
        {isLogin && <Modal onClose={closeModal} />}
      </Router>
    </ThemeProvider>
  );
};

export default App;
