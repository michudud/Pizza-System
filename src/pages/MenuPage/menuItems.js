import classic_spicciana_img from "./../../assets/images/menu/classic_spicciana.jpg";
import classic_parmenada_img from "./../../assets/images/menu/classic_parmenada.jpg";
import classic_farmerado_img from "./../../assets/images/menu/classic_farmerado.jpg";
import classic_mexsta_img from "./../../assets/images/menu/classic_mexsta.jpg";
import classic_tomanto_img from "./../../assets/images/menu/classic_tomanto.jpg";
import classic_tunasia_img from "./../../assets/images/menu/classic_tunasia.jpg";
import classic_andchios_img from "./../../assets/images/menu/classic_andchios.jpg";

import vegetarian_falafeliana_img from "./../../assets/images/menu/vegetarian_falafeliana.jpg";
import vegetarian_lasveggies_img from "./../../assets/images/menu/vegetarian_lasveggies.jpg";
import vegetarian_spicegrills_img from "./../../assets/images/menu/vegetarian_spicegrills.jpg";

import vegan_animaless_img from "./../../assets/images/menu/vegan_animaless.jpg";
import vegan_veganium_img from "./../../assets/images/menu/vegan_veganium.jpg";
import vegan_topvegun_img from "./../../assets/images/menu/vegan_topvegun.jpg";

import forbidden_momoa_img from "./../../assets/images/menu/forbidden_momoa.jpg";
import forbidden_actinidiana_img from "./../../assets/images/menu/forbidden_actinidiana.jpg";
import forbidden_easterbreakfast_img from "./../../assets/images/menu/forbidden_easterbreakfast.jpg";

export const classicCategory = {
  name: "Classic",
  description: "classic category description",
  pizzas: [
    {
      name: "Spicciana",
      ingredients: [
        "Creamy Sauce",
        "Mozzarella",
        "Jalapeños",
        "Caramelized Onions",
      ],
      image: classic_spicciana_img,
    },
    {
      name: "Parmenada",
      ingredients: [
        "Tomato Sauce",
        "Mozzarella",
        "Parma Ham",
        "Tomatoes",
        "Black Olives",
        "Rucola",
      ],
      image: classic_parmenada_img,
    },
    {
      name: "Farmerado",
      ingredients: [
        "Tomato Sauce",
        "Mozzarella",
        "Ham",
        "Mushrooms",
        "Red Onions",
        "Red Peppers",
        "Black Olives",
      ],
      image: classic_farmerado_img,
    },
    {
      name: "Mexsta",
      ingredients: [
        "BBQ Sauce",
        "Mozzarella",
        "Seasoned Minced Beef",
        "Jalapeños",
      ],
      image: classic_mexsta_img,
    },
    {
      name: "Tomanto",
      ingredients: [
        "Tomato Sauce",
        "Mozzarella",
        "Ham",
        "Mushrooms",
        "Tomatoes",
        "Yellow Peppers",
        "Sweetcorn",
        "Pickles",
        "Black Olives",
      ],
      image: classic_tomanto_img,
    },
    {
      name: "Tunasia",
      ingredients: [
        "Tomato Sauce",
        "Mozzarella",
        "Tuna",
        "Caramelized Onions",
        "Black Olives",
      ],
      image: classic_tunasia_img,
    },
    {
      name: "Andchios",
      ingredients: [
        "Tomato Sauce",
        "Mozzarella",
        "Anchois",
        "Black Olives",
        "Spinach",
        "Parmesan",
      ],
      image: classic_andchios_img,
    },
  ],
};

export const vegetarianCategory = {
  name: "Vegetarian",
  description: "To meat, or not to meat, that is not the question here",
  pizzas: [
    {
      name: "Falafeliana",
      ingredients: [
        "Tomato Sauce",
        "Mozzarella",
        "Red Peppers",
        "Yellow Peppers",
        "Tomatoes",
        "Sweetcorn",
        "Jalapeños",
        "Falafel",
      ],
      image: vegetarian_falafeliana_img,
    },
    {
      name: "Las Veggies",
      ingredients: [
        "Tomato Sauce",
        "Mozzarella",
        "Mushrooms",
        "Tomatoes",
        "Green Peppers",
        "Green Olives",
        "Black Olives",
      ],
      image: vegetarian_lasveggies_img,
    },
    {
      name: "Spice Grills",
      ingredients: [
        "BBQ Sauce",
        "Mozzarella",
        "Vegan Minced 'Meat'",
        "Broccoli",
        "Red Peppers",
        "Red Onions",
        "Jalapeños",
        "Smoked Cheese",
      ],
      image: vegetarian_spicegrills_img,
    },
  ],
};

export const veganCategory = {
  name: "Vegan",
  description: "No animals were used to produce this pizzas",
  pizzas: [
    {
      name: "Animaless",
      ingredients: [
        "Tomato Sauce",
        "Vegan Mozzarella",
        "Vegan Minced 'Meat'",
        "Sweetcorn",
        "Red Onions",
        "Jalapeños",
      ],
      image: vegan_animaless_img,
    },
    {
      name: "Veganium",
      ingredients: ["Tomato Sauce", "Vegan Mozzarella", "Fried Tofu", "Chives"],
      image: vegan_veganium_img,
    },
    {
      name: "Top Ve-Gun",
      ingredients: [
        "Tomato Sauce",
        "Vegan Mozzarella",
        "Vegan Ham",
        "Red Peppers",
        "Tomatoes",
      ],
      image: vegan_topvegun_img,
    },
  ],
};

export const forbiddenCategory = {
  name: "Forbidden",
  description: "After all... why not? Why shouldn't we make it",
  pizzas: [
    {
      name: "Momoa",
      ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Pineapple"],
      image: forbidden_momoa_img,
    },
    {
      name: "Actinidiana",
      ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Kiwi"],
      image: forbidden_actinidiana_img,
    },
    {
      name: "Easter Breakfast",
      ingredients: [
        "Mayonnaise  Sauce",
        "Mozzarella",
        "Ham",
        "Boiled Eggs",
        "Green Olives",
      ],
      image: forbidden_easterbreakfast_img,
    },
  ],
};

export const specialCategory = {
  name: "Special",
  description: "special description",
  pizzas: [],
};
