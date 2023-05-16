import "./AboutSection.style.css";
import our_pizza from "./../.././../assets/images/our_pizza.jpg";
import pizza_history_png from "./../../../assets/images/pizza_history_png.png";
import pizza_history_svg from "./../../../assets/images/pizza_history_svg.svg";

const AboutSection = () => {
  return (
    <div className="AboutSection">
      <div className="content">
        <div className="description">
          <h1>About Pizza</h1>
          <p>You can always learn something new</p>
        </div>
        <div className="our_pizza">
          <img className="our_pizza_img" src={our_pizza} />
          <div className="our_pizza_description">
            <h3>Our Pizza</h3>
            <p>
              Find out how we make our pizza step by step during a virtual
              journey through our kitchen. Learn the ins and outs of selecting
              ingredients, kneading dough and operating the oven. All to prepare
              the best meal possible.
            </p>
          </div>
        </div>
        <div className="pizza_history">
          <div className="pizza_history_description">
            <h3>Pizza History</h3>
            <p>
              Who, how and where discovered the ideal way to consume a few
              simple ingredients. This is not just a history lesson, it is an
              expedition in search of the most important answers related to the
              topic of pizza.
            </p>
          </div>
          <img
            className="pizza_history_img"
            src={pizza_history_svg}
            onError={() => {
              this.src = pizza_history_png;
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default AboutSection;
