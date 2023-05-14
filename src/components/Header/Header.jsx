import "./Header.style.css";
import logo_small from "./../../assets/images/logo_small.png";
import logo_svg from "./../../assets/images/logo_svg.svg";

const Header = () => {
  return (
    <div className="Header">
      <img
        className="logo"
        src={logo_svg}
        onError={() => {
          this.src = logo_small;
        }}
      />
      <div className="navigation">
        {/* <svg className="navigation_border" viewBox="0 0 900 140"> */}
        {/* outer_border */}
        {/* <path
            d="M 40 20 L 860 20 A 20 20 0 0 0 880 40 L 880 100 A 20 20 0 0 0 860 120 L 40 120 A 20 20 0 0 0 20 100 L 20 40 A 20 20 0 0 0 40 20"
            stroke="#F5F5F5"
            strokeWidth="5"
            stroke-linecap="square"
            fill="none"
            vectorEffect="non-scaling-stroke"
          /> */}
        {/* /outer_border */}
        {/* inner_border */}
        {/* <path
            d="M 50 30 L 850 30 A 20 20 0 0 0 870 50 L 870 90 A 20 20 0 0 0 850 110 L 50 110 A 20 20 0 0 0 30 90 L 30 50 A 20 20 0 0 0 50 30"
            stroke="#F5F5F5"
            strokeWidth="2"
            stroke-linecap="square"
            fill="none"
            vectorEffect="non-scaling-stroke"
          /> */}
        {/* /inner_border */}
        {/* </svg> */}

        <svg className="navigation_border_left" viewBox="0 0 50 140">
          <path
            d="M 50 20 L 30 20 A 20 20 0 0 1 10 40 L 10 100 A 20 20 0 0 1 30 120 L 50 120"
            stroke="#F5F5F5"
            strokeWidth="6"
            stroke-linecap="square"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 50 30 L 40 30 A 20 20 0 0 1 20 50 L 20 90 A 20 20 0 0 1 40 110 L 50 110"
            stroke="#F5F5F5"
            strokeWidth="2"
            stroke-linecap="square"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="navigation_border_center_outer">
          <div className="navigation_border_center_inner">
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Discover</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <svg className="navigation_border_right" viewBox="0 0 50 140">
          <path
            d="M 0 20 L 20 20 A 20 20 0 0 0 40 40 L 40 100 A 20 20 0 0 0 20 120 L 0 120"
            stroke="#F5F5F5"
            strokeWidth="6"
            stroke-linecap="square"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 0 30 L 10 30 A 20 20 0 0 0 30 50 L 30 90 A 20 20 0 0 0 10 110 L 0 110"
            stroke="#F5F5F5"
            strokeWidth="2"
            stroke-linecap="square"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </div>
  );
};
export default Header;
