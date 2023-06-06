import "./DealsSection.style.css";
import regular_promo from "./../../../assets/images/regular_promo.jpg";
import daily_promo from "./../../../assets/images/daily_promo.jpg";

const DealsSection = () => {
  return (
    <div className="DealsSection">
      <div className="content">
        <div className="description">
          <h1>Amazing Deals</h1>
          <p>It's just a wise decision</p>
        </div>
        <div className="deals">
          <p>
            We don't need your e-mail address and we are not sending any
            newsletters.
            <br /> Check out our regular and daily promotions or play our little
            catching pizza game and get promo code for special offers.
          </p>
          <div className="promo_section">
            <div className="promotion">
              <img src={regular_promo} />
            </div>
            <div className="promotion">
              <img src={daily_promo} />
            </div>
            <div className="promotion">
              in progress
              {/* <img /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DealsSection;
