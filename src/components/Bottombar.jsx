import { NavLink } from "react-router-dom";
import { bottomTabs } from "../utils/navOptions";

const Bottombar = () => {
  return (
    <nav
      className="navbar fixed-bottom bg-body border-top py-0 shadow-lg d-lg-none"
      style={{ zIndex: 1000 }}
    >
      <div className="container-fluid p-0">
        <div className="d-flex justify-content-around w-100 py-1">
          {bottomTabs.map((tab) => (
            <NavLink
              key={tab.id}
              className={({ isActive }) =>
                `btn btn-link text-decoration-none d-flex flex-column align-items-center gap-1 border-0 py-2 transition-fast ${
                  isActive ? "text-pink fw-bold" : "text-muted"
                }`
              }
              to={`/${tab.id}`}
            >
              {({ isActive }) => (
                <>
                  <i
                    className={`bi ${isActive ? `${tab.icon}-fill` : tab.icon} fs-5`}
                  ></i>
                  <span style={{ fontSize: "11px" }}>{tab.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Bottombar;
