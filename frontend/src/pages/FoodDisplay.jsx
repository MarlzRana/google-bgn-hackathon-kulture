import styles from "./FoodDisplay.module.css";
import JapaneseFoodImg from "./japanese-food-place.png";

function FoodDisplay({ culture, name, img, website }) {
  return (
    <div className={styles.main}>
      <div className={styles.widget}>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h3>{culture}</h3>
        <p>Type: Restaurant</p>
        <p>Monday: 09:00 - 22:00</p>
        <p>Tuesday: 09:00 - 22:00</p>
        <p>Wednesday: 09:00 - 22:00</p>
        <p>Thursday: 09:00 - 22:00</p>
        <p>Friday: 09:00 - 22:00</p>
        <p>Saturday: 09:00 - 23:00</p>
        <p>Sunday: 09:00 - 23:00</p>
        <p>Phone Number: +44 020 82 673 234</p>
        <a href={website} target="_blank">
          Website
        </a>
        <p>
          <u>Address</u>:
        </p>
        <p>123</p>
        <p>Wharton Street</p>
        <p>Kings Cross London W13 0AB</p>
      </div>
    </div>
  );
}

export default FoodDisplay;
