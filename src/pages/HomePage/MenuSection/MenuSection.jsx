import "./MenuSection.style.css";
import category_standard from "./../../../assets/images/category_standard.jpg";
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
            <div className="category_name">Standard</div>
          </div>
          <div className="menu_category">
            <img className="category_img" src={category_vege} />
            <div className="category_name">Vegetarian and Vegan</div>
          </div>
          <div className="menu_category">
            <img className="category_img" src={category_specjal} />
            <div className="category_name">Specjal</div>
          </div>
          <div className="menu_category">
            <img className="category_img" src={category_forbidden} />
            <div className="category_name">Forbidden</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuSection;
