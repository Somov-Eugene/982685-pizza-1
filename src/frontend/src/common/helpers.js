import {
  PIZZA_DOUGH,
  PIZZA_SIZES,
  PIZZA_SAUCES,
  PIZZA_INGREDIENTS,
} from "./constants";

export const findPizzaDough = (dough) => {
  const pizzaDough = PIZZA_DOUGH.find(
    (item) => dough.name === item.name
  );

  return {
    ...dough,
    value: pizzaDough.value,
  };
};

export const findPizzaSize = (size) => {
  const pizzaSize = PIZZA_SIZES.find(
    (item) => size.multiplier === item.multiplier
  );

  return {
    ...size,
    value: pizzaSize.value,
  };
};

export const findPizzaSauces = (sauce) => {
  const pizzaSauce = PIZZA_SAUCES.find(
    (item) => sauce.name === item.name
  );

  return {
    ...sauce,
    value: pizzaSauce.value,
  };
};

export const findPizzaIngredients = (ingredient) => {
  const pizzaIngredient = PIZZA_INGREDIENTS.find(
    (item) => ingredient.name === item.name
  );

  return {
    ...ingredient,
    value: pizzaIngredient.value,
  };
};
