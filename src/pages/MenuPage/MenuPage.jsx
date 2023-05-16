import "./MenuPage.style.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MenuCategory from "./MenuCategory";
import {
  classicCategory,
  vegetarianCetegory,
  veganCetegory,
  forbiddenCetegory,
} from "./menuItems";

const MenuPage = () => {
  return (
    <div className="MenuPage">
      <Header />
      <div className="menu">
        <MenuCategory category={classicCategory} />
        <MenuCategory category={vegetarianCetegory} />
        <MenuCategory category={veganCetegory} />
        <MenuCategory category={forbiddenCetegory} />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
