import "./AboutSection.style.css";
import pizza_history_png from "./../../../assets/images/pizza_history_png.png";
import pizza_history_svg from "./../../../assets/images/pizza_history_svg.svg";

const AboutSection = () => {
  return (
    <div className="AboutSection">
      <div className="content">
        <div className="description">
          <h1>About Us</h1>
          <p>about us section</p>
        </div>
        <div className="pizza_history">
          <img
            className="pizza_history_img"
            src={pizza_history_svg}
            onError={() => {
              this.src = pizza_history_png;
            }}
          />
          <p className="pizza_history_description">pizza history</p>
        </div>
        <div className="our_pizza">
          <img />
          <p>our pizza</p>
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
