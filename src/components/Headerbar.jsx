import { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import UIContext from "../context/UIContext";

import LogoImg from "../assets/images/GineCareLogo.png";

import notifications from "../data/notifications";

import { menuItems } from "../utils/navOptions";

// comenzamos optimizacion de links
const Headerbar = () => {
  const initForm = {
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  };

  const { isDarkMode, toggleTheme, toggleSidebar, toggleModal, isModalOpen } =
    useContext(UIContext);
  const [, setActiveSidebarLink] = useState("Inicio");
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [, setForm] = useState(initForm);

  const user = {
    fullName: "Maria Garcia Hernandez",
    name: "Dra. Maria Garcia",
    phone: "8991234567",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  };

  const toggleNotifications = () => {
    setIsNotificationsOpen(!isNotificationsOpen);
    if (isNotificationsOpen) setIsUserDropdownOpen(false);
  };
  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    if (!isUserDropdownOpen) setIsNotificationsOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toggleSidebar();
    setIsUserDropdownOpen(false);
  };

  const toggleModalHandler = () => {
    if (!isModalOpen) {
      setForm({
        ...initForm,
        name: isLoggedIn ? user.fullName : "",
        phone: isLoggedIn ? user.phone : "",
      });
    }
    toggleModal();
  };

  return (
    <>
      {/* --- HEADER (RESPONSIVO) --- */}
      <nav className="navbar navbar-expand-lg fixed-top bg-body border-bottom shadow-sm py-2">
        <div className="container-fluid px-3 px-lg-5">
          <Link
            className="navbar-brand d-flex align-items-center me-4"
            to={"/"}
          >
            <img
              src={LogoImg}
              alt="GineCare Logo"
              className="rounded-3 shadow-sm"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
            <span className="ms-2 fw-bold d-none d-lg-inline text-pink">
              GineCare
            </span>
          </Link>

          {/* Menú Desktop (Solo visible en LG) */}
          <div className="collapse navbar-collapse d-none d-lg-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
              {menuItems.map((item) => (
                <li key={item.label} className="nav-item">
                  <NavLink
                    to={`/${item.id}`}
                    className={({ isActive }) =>
                      `btn nav-link px-3 fw-medium transition-fast ${isActive ? "text-pink active-nav-link" : ""}`
                    }
                    onClick={() => setActiveSidebarLink(item.label)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="d-flex align-items-center gap-3">
              <button
                className="btn btn-pink rounded-pill px-4 fw-bold shadow-sm"
                onClick={toggleModalHandler}
              >
                Agendar Cita
              </button>

              {/* Perfil Dropdown Desktop */}
              <div className="position-relative border-start ps-3 ms-2">
                <button
                  className="btn btn-link text-decoration-none text-body p-0 d-flex align-items-center gap-2 shadow-none"
                  onClick={toggleUserDropdown}
                >
                  {isLoggedIn ? (
                    <>
                      <img
                        src={user.photo}
                        className="rounded-circle border border-2 border-pink"
                        style={{ width: "36px", height: "36px" }}
                        alt="User"
                      />
                      <span className="small fw-bold d-none d-xl-inline">
                        {user.name}
                      </span>
                      <i
                        className={`bi bi-chevron-down small transition-fast ${isUserDropdownOpen ? "rotate-180" : ""}`}
                      ></i>
                    </>
                  ) : (
                    <>
                      <div
                        className="bg-body-tertiary rounded-circle d-flex align-items-center justify-content-center border"
                        style={{ width: "36px", height: "36px" }}
                      >
                        <i className="bi bi-person"></i>
                      </div>
                      <span className="small fw-bold">Ingresar</span>
                      <i
                        className={`bi bi-chevron-down small transition-fast ${isUserDropdownOpen ? "rotate-180" : ""}`}
                      ></i>
                    </>
                  )}
                </button>

                {isUserDropdownOpen && (
                  <>
                    <div
                      className="dropdown-overlay-fixed"
                      onClick={toggleUserDropdown}
                    ></div>
                    <div
                      className="dropdown-menu show end-0 mt-3 shadow-lg border-0 rounded-4 p-2 overflow-hidden bg-body"
                      style={{
                        width: "220px",
                        position: "absolute",
                        zIndex: 1060,
                      }}
                    >
                      {isLoggedIn ? (
                        <>
                          <div className="px-3 py-2 border-bottom mb-1">
                            <p className="m-0 small text-muted">
                              Conectado como
                            </p>
                            <p className="m-0 fw-bold text-truncate small">
                              {user.fullName}
                            </p>
                          </div>
                          <button
                            className="dropdown-item rounded-3 py-2 small"
                            onClick={toggleUserDropdown}
                          >
                            <i className="bi bi-person me-2"></i> Mi Perfil
                          </button>
                          <button
                            className="dropdown-item rounded-3 py-2 small"
                            onClick={toggleUserDropdown}
                          >
                            <i className="bi bi-gear me-2"></i> Configuración
                          </button>
                          <div className="dropdown-divider"></div>
                          <button
                            className="dropdown-item rounded-3 py-2 small text-danger fw-bold"
                            onClick={handleLogout}
                          >
                            <i className="bi bi-box-arrow-right me-2"></i>{" "}
                            Cerrar Sesión
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="dropdown-item rounded-3 py-2 small fw-bold text-pink"
                            onClick={() => {
                              setIsLoggedIn(true);
                              setIsUserDropdownOpen(false);
                            }}
                          >
                            <i className="bi bi-box-arrow-in-right me-2"></i>{" "}
                            Iniciar Sesión
                          </button>
                          <button
                            className="dropdown-item rounded-3 py-2 small fw-medium"
                            onClick={toggleUserDropdown}
                          >
                            <i className="bi bi-person-plus me-2"></i> Crear
                            Cuenta
                          </button>
                        </>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Controles Mobile/Tablet */}
          <div className="d-flex align-items-center gap-2 gap-sm-4 ms-auto ms-lg-4">
            <div className="form-check form-switch m-0 d-flex align-items-center">
              <input
                className="form-check-input custom-pink-switch cursor-pointer shadow-none"
                type="checkbox"
                role="switch"
                checked={isDarkMode}
                onChange={toggleTheme}
              />
              <span className="ms-2 d-none d-sm-inline small">
                {isDarkMode ? "🌙" : "☀️"}
              </span>
            </div>

            <div className="position-relative">
              <button
                className="btn btn-link text-body p-1 shadow-none"
                onClick={toggleNotifications}
              >
                <i className="bi bi-bell-fill fs-5 text-pink"></i>
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger p-1 border border-2 border-white"
                  style={{ marginTop: "4px" }}
                ></span>
              </button>
              {isNotificationsOpen && (
                <>
                  <div
                    className="dropdown-overlay-fixed"
                    onClick={toggleNotifications}
                  ></div>
                  <div
                    className="notif-card shadow-lg border rounded-4 bg-body position-absolute end-0 mt-2 p-0 overflow-hidden"
                    style={{ zIndex: 2000, width: "280px" }}
                  >
                    <div className="p-3 border-bottom bg-body-tertiary fw-bold small text-pink">
                      Notificaciones
                    </div>
                    <div
                      className="overflow-auto"
                      style={{ maxHeight: "300px" }}
                    >
                      {notifications.map((n) => (
                        <div
                          key={n.id}
                          className="p-3 border-bottom dropdown-item text-wrap"
                        >
                          <p className="mb-1 small fw-medium text-body">
                            {n.text}
                          </p>
                          <small
                            className="text-muted"
                            style={{ fontSize: "10px" }}
                          >
                            {n.time}
                          </small>
                        </div>
                      ))}
                    </div>
                    <button
                      className="btn btn-link w-100 text-pink text-decoration-none small py-2 fw-bold"
                      onClick={toggleNotifications}
                    >
                      Cerrar
                    </button>
                  </div>
                </>
              )}
            </div>

            <button
              className="btn btn-link text-body p-1 shadow-none d-lg-none"
              onClick={toggleSidebar}
            >
              <i className="bi bi-list fs-3 text-pink"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Headerbar;
