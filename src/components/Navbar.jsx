import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [scrolledDown, setScrolledDown] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log("scrollTop", scrollTop);
    if (scrollTop > 0) {
      setScrolledDown(true);
    } else if (scrollTop === 0) {
      setScrolledDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav-bg header ${scrolledDown ? "scrolled-up" : ""}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <img
              src="https://www.transperfect.com/themes/custom/droopler_subtheme/TPlogo-01.png"
              alt="logo"
              width={"250px"}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className={
                    location.pathname === "/" ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/about"}
                  className={
                    location.pathname === "/about"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  aria-current="page"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/services"}
                  className={
                    location.pathname === "/services"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/solutions"}
                  className={
                    location.pathname === "/solutions"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  aria-current="page"
                >
                  Solutions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/request"}
                  className={
                    location.pathname === "/request"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  aria-current="page"
                >
                  Request a Quote
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/contact"}
                  className={
                    location.pathname === "/contact"
                      ? "nav-link active"
                      : "nav-link"
                  }
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
