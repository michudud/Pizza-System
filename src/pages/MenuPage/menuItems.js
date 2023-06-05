const menuAssetsSrc = "./../../../assets/images/menu/";

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
      image: menuAssetsSrc + "classic_spicciana.jpg",
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
      image: menuAssetsSrc + "classic_parmenada.jpg",
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
      image: menuAssetsSrc + "classic_farmerado.jpg",
    },
    {
      name: "Mexsta",
      ingredients: [
        "BBQ Sauce",
        "Mozzarella",
        "Seasoned Minced Beef",
        "Jalapeños",
      ],
      image: menuAssetsSrc + "classic_mexsta.jpg",
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
      image: menuAssetsSrc + "classic_tomanto.jpg",
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
      image: menuAssetsSrc + "classic_tunasia.jpg",
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
      image: menuAssetsSrc + "classic_andchios.jpg",
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
      image: menuAssetsSrc + "vegetarian_falafeliana.jpg",
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
      image: menuAssetsSrc + "vegetarian_lasveggies.jpg",
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
      image: menuAssetsSrc + "vegetarian_spicegrills.jpg",
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
      image: menuAssetsSrc + "vegan_animaless.jpg",
    },
    {
      name: "Veganium",
      ingredients: ["Tomato Sauce", "Vegan Mozzarella", "Fried Tofu", "Chives"],
      image: menuAssetsSrc + "vegan_veganium.jpg",
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
      image: menuAssetsSrc + "vegan_topvegun.jpg",
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
      image: menuAssetsSrc + "forbidden_momoa.jpg",
    },
    {
      name: "Actinidiana",
      ingredients: ["Tomato Sauce", "Mozzarella", "Ham", "Kiwi"],
      image: menuAssetsSrc + "forbidden_actinidiana.jpg",
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
      image: menuAssetsSrc + "forbidden_easterbreakfast.jpg",
    },
  ],
};

export const specialCategory = {
  name: "Special",
  description: "special description",
  pizzas: [],
};
