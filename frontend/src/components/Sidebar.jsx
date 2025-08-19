import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaBuilding, FaDoorOpen, FaBox, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      style={{
        width: isOpen ? "220px" : "70px",
        background: "rgba(255, 255, 255, 0.35)",
        border: "4px solid #a259ff",
        // borderImage: "linear-gradient(90deg, #a259ff, #ab69ceff, #FFFFFF) 1",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: isOpen ? "flex-start" : "center",
        padding: "20px 10px",
        boxSizing: "border-box",
        transition: "width 0.3s ease",
      }}
    >
      {/* Hamburger */}
      <div
        style={{
          marginBottom: "30px",
          fontSize: "1.8rem",
          cursor: "pointer",
          alignSelf: isOpen ? "flex-end" : "center",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </div>

      {/* Menu */}
      <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
        <li style={{ margin: "25px 0" }}>
          <Link
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: "#2d2d7b",
              fontWeight: "bold",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaHome />
            {isOpen && "Dashboard"}
          </Link>
        </li>

        <li style={{ margin: "25px 0" }}>
          <Link
            to="/floors"
            style={{
              textDecoration: "none",
              color: "#2d2d7b",
              fontWeight: "bold",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaBuilding />
            {isOpen && "Manage Floors"}
          </Link>
        </li>

        <li style={{ margin: "25px 0" }}>
          <Link
            to="/rooms"
            style={{
              textDecoration: "none",
              color: "#2d2d7b",
              fontWeight: "bold",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaDoorOpen />
            {isOpen && "Manage Rooms"}
          </Link>
        </li>

        <li style={{ margin: "25px 0" }}>
          <Link
            to="/resources"
            style={{
              textDecoration: "none",
              color: "#2d2d7b",
              fontWeight: "bold",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaBox />
            {isOpen && "Manage Resources"}
          </Link>
        </li>

        <li style={{ margin: "25px 0" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#2d2d7b",
              fontWeight: "bold",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <FaSignOutAlt />
            {isOpen && "Logout"}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
