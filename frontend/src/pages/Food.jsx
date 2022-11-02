import styles from "./Food.module.css";

import FoodListItem from "./ListItem";
import searchImg from "./search.png";
import FoodLeftSection from "./FoodLeftSection";
import AddFoodPlaceWidget from "./AddFoodPlaceWidget";
import { redirect, useNavigate } from "react-router-dom";
import JapaneseFoodPlace from "./japanese-food-place.png";
import ChineseFoodPlace from "./chinese-restaurant.jpg";
import NigerianRestaurant from "./nigerian-restaurant.jpg";
import IndianRestaurant from "./indian-restaurant.jpg";
import { useState } from "react";

function Food() {
  const navigate = useNavigate();

  const originalArr = [
    {
      imgSrc: JapaneseFoodPlace,
      culture: "Japanese",
      name: "Hot Stones",
      location: "Islington London",
      description:
        "Join us for Award-winning sushi and take part in an ancient Japanese method of cooking and eating known as Ishiyaki, right in the heart of Islington. A unique experience unlike any other restaurant in London.",
      redirect: "/mainApp/foodDisplay1",
    },
    {
      imgSrc: NigerianRestaurant,
      culture: "Nigerian",
      name: "Enish Africa",
      location: "Lewisham London",
      description:
        "Award Winning Nigerian Restaurant, known for our rich delectable traditional vegetable soup made with locust beans, palm oil and leafy spinach mixed together with aromatic spices in a special tomato.",
      redirect: "/mainApp/foodDisplay2",
    },
    {
      imgSrc: IndianRestaurant,
      culture: "Indian",
      name: "Copper Chimney",
      location: "Shepherds Bush London",
      description:
        "Copper Chimney is an ode to secret recipes and cooking techniques from across Undivided North India. Copper Chimney serves up a flavourful melange of its signature Indian dishes, flavours and ingredients to deliver an unforgettable dining experiences.",
      redirect: "/mainApp/foodDisplay3",
    },
    {
      imgSrc: ChineseFoodPlace,
      culture: "Chinese",
      name: "Dragon Inn",
      location: "Pimlico London",
      description:
        "Sichuan food is most well-known for its hot and spicy flavor, though it may sport sweet and sour flavors too. The most commonly used spices you can find in most households and eateries are 'The Five Fragrances' which consist of fennel, pepper, aniseed, cinnamon, and clove.",
      redirect: "/mainApp/foodDisplay4",
    },
  ];
  const [foodSpots, setFoodSpots] = useState([
    {
      imgSrc: JapaneseFoodPlace,
      culture: "Japanese",
      name: "Hot Stones",
      location: "Islington London",
      description:
        "Join us for Award-winning sushi and take part in an ancient Japanese method of cooking and eating known as Ishiyaki, right in the heart of Islington. A unique experience unlike any other restaurant in London.",
      redirect: "/mainApp/foodDisplay1",
    },
    {
      imgSrc: NigerianRestaurant,
      culture: "Nigerian",
      name: "Enish Africa",
      location: "Lewisham London",
      description:
        "Award Winning Nigerian Restaurant, known for our rich delectable traditional vegetable soup made with locust beans, palm oil and leafy spinach mixed together with aromatic spices in a special tomato.",
      redirect: "/mainApp/foodDisplay2",
    },
    {
      imgSrc: IndianRestaurant,
      culture: "Indian",
      name: "Copper Chimney",
      location: "Shepherds Bush London",
      description:
        "Copper Chimney is an ode to secret recipes and cooking techniques from across Undivided North India. Copper Chimney serves up a flavourful melange of its signature Indian dishes, flavours and ingredients to deliver an unforgettable dining experiences.",
      redirect: "/mainApp/foodDisplay3",
    },
    {
      imgSrc: ChineseFoodPlace,
      culture: "Chinese",
      name: "Dragon Inn",
      location: "Pimlico London",
      description:
        "Sichuan food is most well-known for its hot and spicy flavor, though it may sport sweet and sour flavors too. The most commonly used spices you can find in most households and eateries are 'The Five Fragrances' which consist of fennel, pepper, aniseed, cinnamon, and clove.",
      redirect: "/mainApp/foodDisplay4",
    },
  ]);

  const search = (selectValue, searchQuery) => {
    setFoodSpots(
      originalArr.filter((elem) => elem[selectValue].includes(searchQuery))
    );
  };
  return (
    <div className={styles.main}>
      <FoodLeftSection search={search} />

      <div className={styles.foodListItemContainer}>
        {foodSpots.map((elem, idx) => (
          <FoodListItem
            imgSrc={elem.imgSrc}
            culture={elem.culture}
            name={elem.name}
            location={elem.location}
            description={elem.description}
            redirect={elem.redirect}
            key={idx}
          />
        ))}
      </div>
      <button
        className={styles.addFoodSpot}
        onClick={() => navigate("/mainApp/foodAdd")}
      >
        +
      </button>
    </div>
  );
}
export default Food;
