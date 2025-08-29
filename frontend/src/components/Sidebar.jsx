import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBars, FaBuilding, FaDoorOpen, FaBox, FaSignOutAlt } from "react-icons/fa";

const menuItems = [
  { to: "/dashboard", icon: <FaHome />, label: "Dashboard" },
  { to: "/floors", icon: <FaBuilding />, label: "Manage Floors" },
  { to: "/rooms", icon: <FaDoorOpen />, label: "Manage Rooms" },
  { to: "/resources", icon: <FaBox />, label: "Manage Resources" },
  { to: "/", icon: <FaSignOutAlt />, label: "Logout" },
];

const Sidebar = () => {
  // Persist sidebar state in localStorage
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem("sidebarOpen");
    return saved === null ? true : saved === "true";
  });
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("sidebarOpen", isOpen);
  }, [isOpen]);

  return (
    <div
      style={{
        width: isOpen ? "230px" : "70px",
        background: "rgba(255, 255, 255, 1)",
        borderImage: "linear-gradient(180deg, #7B0FFF, #F70DE4) 1",
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        alignItems: isOpen ? "flex-start" : "center",
        padding: isOpen ? "23px 16px" : "23px 20px",
        boxSizing: "border-box",
        transition: "width 0.3s ease",
        marginLeft: "25px",
        marginTop: "15px",
        marginBottom: "15px",
        borderRadius: "15px",
        boxShadow: "0 8px 24px rgba(123, 15, 255, 0.15), 0 1.5px 6px rgba(0,0,0,0.08)",
      }}
    >
      {/* Logo + Hamburger */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
          width: "100%",
          justifyContent: isOpen ? "flex-end" : "center",
        }}
      >
        <img
          src="/image.png"
          alt="Logo"
          style={{
            width: "1000px",
            height: "40px",
            marginRight: "10px",
            borderRadius: "10px",
            display: isOpen ? "block" : "none",
          }}
        />
        <div
          style={{
            fontSize: "1.8rem",
            cursor: "pointer",
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <FaBars />
        </div>
      </div>

      {/* Menu */}
      <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.to;
          return (
            <li
              key={item.label}
              style={{
                margin: "25px 0",
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
              className={`sidebar-item${isActive ? " active" : ""}`}
            >
              <Link
                to={item.to}
                style={{
                  textDecoration: "none",
                  color: isActive ? "#7B0FFF" : "#2d2d7b",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  position: "relative",
                }}
              >
                {item.icon}
                {isOpen && item.label}
                {!isOpen && (
                  <span className="sidebar-tooltip">
                    {item.label}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Tooltip & active styles */}
      <style>
        {`
          .sidebar-tooltip {
            visibility: hidden;
            opacity: 0;
            position: absolute;
            left: 30px;
            background: #717072;
            color: #fff;
            border-radius: 4px;
            padding: 5px 12px;
            white-space: nowrap;
            font-size: 0.85rem;
            box-shadow: 0 2px 8px rgba(123,15,255,0.15);
            transition: opacity 0.2s, visibility 0.2s;
            z-index: 10;
          }
          .sidebar-item:hover .sidebar-tooltip {
            visibility: visible;
            opacity: 1;
          }
          .sidebar-item.active > a {
            border-radius: 8px;
            width: 100%;
            height: 100%;
            color: #913afaff !important;
          }
        `}
      </style>
    </div>
  );
};

export default Sidebar;
