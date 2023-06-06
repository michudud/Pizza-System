import "./MenuSection.style.css";
import { allSections } from "./sectionItems";

const MenuSection = () => {
  return (
    <div className="MenuSection">
      <div className="content">
        <div className="description">
          <h1>Check our Menu</h1>
          <p>We've got something for everyone</p>
        </div>
        <div className="categories">
          {allSections.map((section) => {
            return (
              <div className="menu_category">
                <img className="category_img" src={section.image} />
                <div className="category_name">{section.name}</div>
                <div className="category_description">
                  {section.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MenuSection;
