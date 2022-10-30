import styles from "./Food.module.css";

import FoodListItem from "./FoodListItem";
import searchImg from "./search.png";
import FoodLeftSection from "./FoodLeftSection";
import AddFoodPlaceWidget from "./AddFoodPlaceWidget";
import { useNavigate } from "react-router-dom";
function Food() {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <FoodLeftSection />
      <div className={styles.foodListItemContainer}>
        <FoodListItem />
        <FoodListItem />
        <FoodListItem />
        <FoodListItem />
        <FoodListItem />
        <FoodListItem />
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
