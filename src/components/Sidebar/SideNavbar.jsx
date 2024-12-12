// src/components/CustomSidebar.js
import React from "react";
import { Sidebar } from "primereact/sidebar";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom";
import "../../styles/CustomSidebar.css"; // Optional CSS for custom styles
import { ROUTES } from "../../utils/routes";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImgLogo from "../../assets/logo.png";
import {
  faArrowRightFromBracket,
  faGear,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const CustomSidebar = ({ visible, onHide }) => {
  const navigate = useNavigate();

  const handleLinkClick = () => {
    onHide();
  };
  const handleLogout = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("fullName");
    navigate("/login");
  };
  return (
    <Sidebar visible={visible} onHide={onHide} position="left">
      <div>
        <div className="sidebar-header flex justify-content-start gap-2 align-items-center flex-row  ">
          <h3 className="sidebar-profile-name ">Admin Dashboard</h3>
        </div>
        <ul className="sidebar-links">
          <li>
            <Link
              to={ROUTES.USERS}
              className="sidebar-link"
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faUsers} className="mr-2" /> Users
            </Link>
          </li>

          <li>
            <Link
              to={ROUTES.SETTING}
              className="sidebar-link "
              onClick={handleLinkClick}
            >
              <FontAwesomeIcon icon={faGear} className="mr-2" />
              Settings
            </Link>
          </li>

          <li
            className=" py-2 px-4 rext-black cursor-pointer"
            onClick={() => handleLogout()}
          >
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="mr-2" />
            Logout
          </li>
        </ul>
      </div>

      <div className=" absolute bottom-0 w-80">
        <img
          src={ImgLogo}
          alt=""
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />
      </div>
    </Sidebar>
  );
};

export default CustomSidebar;
