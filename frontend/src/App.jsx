import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import DocumentList from "./pages/DocumentList";
import DocumentEditor from "./pages/DocumentEditor";
import DocumentCreator from "./pages/DocumentCreator";

import Navigation from "./components/Navigation";

import Theme from "./styles/Theme";
import { GlobalStyle, Container } from "./styles/GlobalStyle";
import { auth } from "./firebase";

const PrivateRoute = ({ component: Component }) => {
  return auth.currentUser ? <Component /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/documents" element={<PrivateRoute component={DocumentList} />} />
            <Route path="/documents/new" element={<PrivateRoute component={DocumentCreator} />} />
            <Route path="/documents/:id" element={<PrivateRoute component={DocumentEditor} />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
