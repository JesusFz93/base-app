import { useContext } from "react";
import UIContext from "../context/UIContext";

import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";

import HomePage from "../pages/HomePage";

import Sidebar from "../components/Sidebar";
import Headerbar from "../components/Headerbar";
import Bottombar from "../components/Bottombar";
import Footer from "../components/Footer";
import CitaModal from "../components/CitaModa";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";

const AppRouter = () => {
  const { isDarkMode } = useContext(UIContext);

  return (
    <Router>
      <div
        className="ginecare-root"
        data-bs-theme={isDarkMode ? "dark" : "light"}
      >
        <Headerbar />
        <Sidebar />
        <div className="app-container min-vh-100 d-flex flex-column bg-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
          <Bottombar />
          <Footer />
          <CitaModal />
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
