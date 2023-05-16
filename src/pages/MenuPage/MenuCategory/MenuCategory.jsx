import "./MenuCategory.style.css";
import { Fragment } from "react";

const MenuCategory = ({ category }) => {
  return (
    <div className="MenuCategory">
      <div className="content">
        <div className="description">
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </div>
        <div className="pizzas">
          {category.pizzas.map((pizza) => {
            return (
              <div className="pizza" key={pizza.name}>
                <p className="pizza_img">{pizza.image}</p>
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
