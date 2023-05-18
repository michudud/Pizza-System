import "./MenuCategory.style.css";
import { Fragment } from "react";

const MenuCategory = ({ category }) => {
  return (
    <div className="MenuCategory">
      <div className="content">
        <div className="description">
          <h1 className="category_name">{category.name}</h1>
          <p className="category_description">{category.description}</p>
          <hr />
        </div>
        <div className="pizzas">
          {category.pizzas.map((pizza) => {
            return (
              <div className="pizza" key={pizza.name}>
                <img className="pizza_img" src={pizza.image} />
                <div className="pizza_details">
                  <h3 className="pizza_name">{pizza.name}</h3>
                  <p className="pizza_ingredients">
                    {pizza.ingredients.map((ingredient) => {
                      return (
                        <Fragment key={ingredient}>
                          {ingredient + ", "}
                        </Fragment>
                      );
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MenuCategory;
