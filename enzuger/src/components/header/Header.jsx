import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
// import Auth from "./Auth";
import Auth from "../Auth/AuthContainer";
import BottomNav from "./BottomNav";

import "./Header.css";
import LOGO from "../../assets/images/logo.webp";
import { IoClose, IoMenu } from "react-icons/io5";
import { BsCart } from "react-icons/bs";

const Header = () => {
  const [active, setActive] = useState("");
  const [activeLink, setActiveLink] = useState("home");
  const [activeLogin, setActiveLogin] = useState(false);

  const { cartItems } = useContext(CartContext);

  const navToggle = () => {
    setActive(active === "" ? " active" : "");
  };
  const handleLogin = () => {
    setActiveLogin(true);
    setActiveLink("login");
  };

  return (
    <>
      <header className="eheader">
        {/* Sudo-Black Header */}
        <div className="eblack-header sflex">
          <span className="w-circle"></span>
          <p className="sspara">Cash on Delivery</p>
          <span className="w-circle"></span>
          <p className="sspara">Natural Ingredients</p>
          <span className="w-circle"></span>
          <p className="sspara">Free Door Delivery</p>
          <span className="w-circle"></span>
          <p className="sspara">Monthly Subscription Available</p>
          <span className="w-circle"></span>
        </div>

        {/* Main Header */}
        <div className="nav sflex">
          <IoMenu className="nav_toggler" onClick={navToggle} />
          <div className="logo sflex">
            <Link
              to="/"
              className={`link ${activeLink === "home" && "alink"}`}
              onClick={() => setActiveLink("home")}
            >
              <img src={LOGO} alt="SDConsultancy" className="sflex" />
            </Link>
          </div>

          {/* Nav */}
          <nav>
            <ul
              className={`sflex links ${active}`}
              onClick={() => {
                if (window.innerWidth < 800) navToggle();
              }}
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link alink" : "link"
                  }
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link alink" : "link"
                  }
                  to="/why-enzuger"
                >
                  WELLNESS
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link alink" : "link"
                  }
                  to="/shop"
                >
                  SHOP
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link alink" : "link"
                  }
                  to="/faq"
                >
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "link alink" : "link"
                  }
                  to="/blog"
                >
                  BLOGS
                </NavLink>
              </li>
              <IoClose className="nav-close" onClick={navToggle} />
            </ul>
          </nav>

          <div className="auth-con sflex">
            <Link className={`aulink`} onClick={handleLogin} to="#">
              Login / Register
            </Link>
            <NavLink
              className={({ isActive }) =>
                ` sflex ro-icon ${isActive ? "aaulink" : ""}`
              }
              to="/cart"
            >
              <BsCart />
              <span className="cart-no-item sflex">{cartItems.length}</span>
            </NavLink>
          </div>
        </div>
        <div className={` smartic-overlay ${active}`} onClick={navToggle}></div>

        {activeLogin && <Auth setActiveLogin={setActiveLogin} />}
      </header>
      <BottomNav activeLink={activeLink} setActiveLink={setActiveLink} />
    </>
  );
};

export default Header;
