import "./DealsSection.style.css";

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
            <div className="regular_promo"></div>
            <div className="daily_promo"></div>
            <div className="pizza_game"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DealsSection;
