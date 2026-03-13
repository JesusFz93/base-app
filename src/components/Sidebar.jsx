import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import UIContext from "../context/UIContext";

import { menuItems } from "../utils/navOptions";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useContext(UIContext);
  const [activeSidebarLink, setActiveSidebarLink] = useState("Inicio");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [, setIsUserDropdownOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    toggleSidebar();
    setIsUserDropdownOpen(false);
  };

  const user = {
    fullName: "Maria Garcia Hernandez",
    name: "Dra. Maria Garcia",
    phone: "8991234567",
    photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  };
  return (
    <>
      {/* --- SIDEBAR MOBILE --- */}
      <div
        className={`offcanvas offcanvas-end border-0 d-lg-none ${isSidebarOpen ? "show" : ""}`}
        style={{
          visibility: isSidebarOpen ? "visible" : "hidden",
          zIndex: 2050,
        }}
      >
        <div className="offcanvas-header border-bottom py-3">
          <h5 className="offcanvas-title fw-bold text-pink">Menú</h5>
          <button
            type="button"
            className="btn-close text-reset shadow-none"
            onClick={toggleSidebar}
          ></button>
        </div>
        <div className="offcanvas-body p-0 d-flex flex-column">
          <nav className="flex-grow-1 pt-2">
            <ul className="list-unstyled mb-0">
              {menuItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={`/${item.id}`}
                  className={({ isActive }) =>
                    `sidebar-link d-flex align-items-center gap-3 px-4 py-3 position-relative text-decoration-none ${isActive ? "active" : ""}`
                  }
                  onClick={() => {
                    setActiveSidebarLink(item.label);
                    toggleSidebar();
                  }}
                >
                  <i className={`bi ${item.icon} fs-5`}></i>
                  <span className="fw-medium">{item.label}</span>

                  {/* poner la barra rosa al lado del link activo */}

                  {/* {activeSidebarLink === item.label && (
                    <div className="active-pink-indicator"></div>
                  )} */}
                </NavLink>
              ))}
            </ul>
          </nav>

          <div className="sidebar-footer p-3 border-top bg-body-tertiary">
            {isLoggedIn && (
              <div className="profile-card-sidebar d-flex align-items-center gap-3 p-3 mb-3 rounded-4 border shadow-sm bg-body">
                <img
                  src={user.photo}
                  className="rounded-circle border border-2 border-white"
                  style={{
                    width: "42px",
                    height: "42px",
                    objectFit: "cover",
                  }}
                  alt="Profile"
                />
                <div className="overflow-hidden">
                  <p className="m-0 fw-bold small text-truncate text-body">
                    {user.name}
                  </p>
                  <small className="text-muted" style={{ fontSize: "10px" }}>
                    Sesión Activa
                  </small>
                </div>
              </div>
            )}

            <div className="d-grid gap-2">
              {isLoggedIn ? (
                <button
                  className="btn btn-outline-danger fw-bold py-2 border-2 d-flex align-items-center justify-content-center gap-2 rounded-3"
                  onClick={handleLogout}
                >
                  <i className="bi bi-box-arrow-right"></i> Cerrar Sesión
                </button>
              ) : (
                <>
                  <NavLink
                    className="btn btn-pink fw-bold py-2 rounded-3 shadow-sm"
                    to="/login"
                    onClick={toggleSidebar}
                  >
                    Iniciar Sesión
                  </NavLink>
                  <NavLink
                    className="btn btn-outline-pink fw-bold py-2 rounded-3"
                    to="/register"
                    onClick={toggleSidebar}
                  >
                    Registrarse
                  </NavLink>
                </>
              )}
            </div>

            <div className="text-center mt-3 opacity-50">
              <p
                className="m-0 fw-bold text-uppercase small"
                style={{ letterSpacing: "2px" }}
              >
                GineCare
              </p>
              <small style={{ fontSize: "11px" }}>
                Dr. Ángel Calderón Forton
              </small>
            </div>
          </div>
        </div>
      </div>
      {isSidebarOpen && (
        <div
          className="offcanvas-backdrop fade show d-lg-none"
          style={{ zIndex: 2040 }}
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
