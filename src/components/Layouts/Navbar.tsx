"use client";

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthContext, { AuthContextType } from "@/context/AuthContext";

// Menu data
const menuItems = (token: string | null) => [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About us",
    link: "/about-us/",
  },
  {
    label: "Campus Ambassador",
    link: "/campus-ambassador/",
  },
  {
    label: "Event",
    link: "/event/",
  },
  {
    label: "Verify Certificate",
    link: "/verify",
  },
];
 

// MenuItem component
const MenuItem: React.FC<{ label: string; link: string }> = ({ label, link }) => (
  <li className="nav-item">
    <Link href={link} className="nav-link">
      {label}
    </Link>
  </li>
);

// Navbar component
const Navbar: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [menu, setMenu] = useState(true);
  const { teamRegister } = useContext(AuthContext) as AuthContextType;
  

  // Toggle the mobile menu
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    // Function to read token from local storage
    const fetchTokenFromLocalStorage = () => {
      const storedToken = localStorage?.getItem('token');
      setToken(storedToken ? JSON.parse(storedToken) : null);
    };

    // Initial load of token
    fetchTokenFromLocalStorage();

    // Add scroll event listener
    const handleScroll = () => {
      const elementId = document.getElementById("navbar");
      if (window.scrollY > 170) {
        elementId?.classList.add("is-sticky");
      } else {
        elementId?.classList.remove("is-sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Navbar classes
  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
    <div id="navbar" className="elkevent-nav">
      <nav className="navbar navbar-expand-lg navbar-light" style={{ maxHeight: "90px" }}>
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image
              src="/img/isrc-b.png"
              alt="logo"
              width={180}
              height={58}
            />
          </Link>

          <button
            onClick={toggleNavbar}
            className={classTwo}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>

          <div className={classOne} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {menuItems(token).map((menuItem) => (
                <MenuItem key={menuItem.label} {...menuItem} />
              ))}
            </ul>

            {/* others-options */}
            <div className="others-option">
              {token ? (
                teamRegister ? (
                  <ul>
                    <li>
                      <Link href="/profile" className="btn btn-primary">
                        PROFILE
                      </Link>
                    </li>
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <Link href="/team-register" className="btn btn-primary">
                        REGISTER
                      </Link>
                    </li>
                  </ul>
                )
              ) : (
                <ul>
                <li>
                  <Link href="/auth/login/" className="btn btn-primary">
                    LOGIN
                  </Link>
                </li>
              </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  </>
  );
};

export default Navbar;
