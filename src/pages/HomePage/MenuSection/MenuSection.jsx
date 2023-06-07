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
            const imgUrl = new URL(section.image, import.meta.url).href;
            return (
              <div className="menu_category" key={section.name}>
                <img className="category_img" src={imgUrl} />
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
