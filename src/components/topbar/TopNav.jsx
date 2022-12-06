import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PURGE } from "redux-persist";

import { logoutFun } from "../../redux/actions";

import "./topnav.css";

const clickOutsideRef = (content_ref, toggle_ref) => {
  document.addEventListener("mousedown", (e) => {
    // user click toggle
    if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
      content_ref.current.classList.toggle("active");
    } else {
      // user click outside toggle and content
      if (content_ref.current && !content_ref.current.contains(e.target)) {
        content_ref.current.classList.remove("active");
      }
    }
  });
};

const TopNav = () => {
  const dispatch = useDispatch();
  const dropdown_toggle_el = useRef(null);
  const dropdown_content_el = useRef(null);

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

  const { loggedInUser } = useSelector((state) => state.authReducer);

  return (
    <div className="topnav">
      {/* <div className="topnav__search">
        <input type="text" placeholder="Search here..." />
        <i className="bx bx-search"></i>
      </div> */}
      <div></div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          <div className="dropdown">
            <button className="dropdown__toggle" ref={dropdown_toggle_el}>
              <div className="topnav__right-user">
                <div className="topnav__right-user__image">
                  <img
                    src={require("../../assets/images/profile.png")}
                    alt="Profile"
                  />
                </div>
                <div className="topnav__right-user__name">
                  {loggedInUser?.name}
                </div>
              </div>
            </button>
            <div className="dropdown__content" ref={dropdown_content_el}>
              <Link to="/profile">
                <div className="notification-item">
                  <i className="bx bx-user"></i>
                  <span>Profile</span>
                </div>
              </Link>
              <Link to="/add-cars">
                <div className="notification-item">
                  <i className="bx bx-user"></i>
                  <span>ADD DRIVER/CAR</span>
                </div>
              </Link>
              <Link to="/add-place-price">
                <div className="notification-item">
                  <i className="bx bx-dollar"></i>
                  <span>Set Place-Price</span>
                </div>
              </Link>
              {/* <Link to="/settings">
                <div className="notification-item">
                  <i className="bx bx-cog"></i>
                  <span>Settings</span>
                </div>
              </Link> */}
              <Link
                onClick={() =>
                  dispatch({ type: PURGE, key: "auth", logoutFun })
                }
              >
                <div className="notification-item">
                  <i className="bx bx-log-out-circle bx-rotate-180"></i>
                  <span>Logout</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="topnav__right-item">
          {/* <Dropdown
              icon='bx bx-bell'
              badge='12'
              contentData={notifications}
              renderItems={(item, index) => renderNotificationItem(item, index)}
              renderFooter={() => <Link to='/'>View All</Link>}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
