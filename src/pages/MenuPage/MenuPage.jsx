import "./MenuPage.style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuCategory from "./MenuCategory";
import {
  classicCategory,
  vegetarianCategory,
  veganCategory,
  forbiddenCategory,
} from "./menuItems";

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
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
