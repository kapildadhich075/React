import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 229,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 165,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 129,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 189,
  },
];

const AvailableMeals = () => {
  const mealslist = DUMMY_MEALS.map((meals) => (
    <MealItem
      key={meals.id}
      id={meals.id}
      name={meals.name}
      description={meals.description}
      price={meals.price}
    ></MealItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
