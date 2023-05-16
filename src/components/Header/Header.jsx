import "./Header.style.css";
import logo_png from "./../../assets/images/logo_png.png";
import logo_svg from "./../../assets/images/logo_svg.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div className={`Header ${isScrolled ? "Header_scrolled" : ""}`}>
      <img
        className="logo"
        src={logo_svg}
        onError={() => {
          this.src = logo_png;
        }}
      />
      <div className="navigation">
        <svg className="navigation_border_left" viewBox="0 0 50 140">
          <path
            d="M 50 20 L 30 20 A 20 20 0 0 1 10 40 L 10 100 A 20 20 0 0 1 30 120 L 50 120"
            stroke="#F5F5F5"
            strokeWidth={isScrolled ? "4" : "6"}
            strokeLinecap="square"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 50 30 L 40 30 A 20 20 0 0 1 20 50 L 20 90 A 20 20 0 0 1 40 110 L 50 110"
            stroke="#F5F5F5"
            strokeWidth="2"
            strokeLinecap="square"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="navigation_border_center_outer">
          <div className="navigation_border_center_inner">
            <ul>
              <li>
                <Link className="navigation_link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="navigation_link" to="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link className="navigation_link" to="/">
                  Discover
                </Link>
              </li>
              <li>
                <Link className="navigation_link" to="/">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="navigation_link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <svg className="navigation_border_right" viewBox="0 0 50 140">
          <path
            d="M 0 20 L 20 20 A 20 20 0 0 0 40 40 L 40 100 A 20 20 0 0 0 20 120 L 0 120"
            stroke="#F5F5F5"
            strokeWidth={isScrolled ? "4" : "6"}
            strokeLinecap="square"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 0 30 L 10 30 A 20 20 0 0 0 30 50 L 30 90 A 20 20 0 0 0 10 110 L 0 110"
            stroke="#F5F5F5"
            strokeWidth="2"
            strokeLinecap="square"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
};
export default Header;
