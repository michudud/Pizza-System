import "./MenuSection.style.css";
import category_standard from "./../../../assets/images/category_classic.jpg";
import category_vege from "./../../../assets/images/category_vege.jpg";
import category_specjal from "./../../../assets/images/category_specjal.jpg";
import category_forbidden from "./../../../assets/images/category_forbidden.jpg";

const MenuSection = () => {
  return (
    <div className="MenuSection">
      <div className="content">
        <div className="description">
          <h1>Check our Menu</h1>
          <p>We've got something for everyone.</p>
        </div>
        <div className="categories">
          <div className="menu_category">
            <img className="category_img" src={category_standard} />
            <div className="category_name">Classic</div>
            <div className="category_description">
              Timeless classics straight from Italian kitchens. Simple
              combinations of delicious and fresh ingredients but also some more
              complex compositions that will satisfy almost every pizza lover.
            </div>
          </div>
          <div className="menu_category">
            <img className="category_img" src={category_vege} />
            <div className="category_name">Vegetarian & Vegan</div>
            <div className="category_description">
              Have you given up eating meat or animal products? For us it's not
              a problem, we will do everything to prepare a dish suitable for
              your preferences, while keeping the unique taste of delicious
              pizza.
            </div>
          </div>
          <div className="menu_category">
            <img className="category_img" src={category_specjal} />
            <div className="category_name">Special</div>
            <div className="category_description">
              For the most discerning pizza absorbers, we have prepared several
              special positions. Each targets different tastes but we believe
              that if you are suitably abnormal you will be tempted by one of
              them.
            </div>
          </div>
          <div className="menu_category">
            <img className="category_img" src={category_forbidden} />
            <div className="category_name">Forbidden</div>
            <div className="category_description">
              Some say that pineapple doesn't belong on pizza.... and we agree,
              but we can't prevent anyone from eating their favorite, most
              desired kind of pizza, so.... let it be.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuSection;
