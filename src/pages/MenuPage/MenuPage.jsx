import "./MenuPage.style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuCategory from "./MenuCategory";
import {
  classicCategory,
  vegetarianCategory,
  veganCategory,
  forbiddenCategory,
  specialCategory,
} from "./menuItems";
import special_cheese_img from "./../../assets/images/menu/special_cheese.png";

const MenuPage = () => {
  return (
    <div className="MenuPage">
      <Header />
      <div className="page_content">
        <h1 className="page_title">Menu</h1>
        <MenuCategory category={classicCategory} />
        <MenuCategory category={vegetarianCategory} />
        <MenuCategory category={veganCategory} />
        <MenuCategory category={forbiddenCategory} />
        <MenuCategory category={specialCategory} />
        <img className="special_category_img" src={special_cheese_img} />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
