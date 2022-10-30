import styles from "./FoodDisplay.module.css";
import JapaneseFoodImg from "./japanese-food-place.png";

function FoodDisplay() {
  return (
    <div className={styles.main}>
      <div className={styles.widget}>
        <img src={JapaneseFoodImg} alt="" />
        <h2>Osaka Hills</h2>
        <h3>Japanese</h3>
        <p>Type: Restaurant</p>
        <p>Monday: 09:00 - 22:00</p>
        <p>Tuesday: 09:00 - 22:00</p>
        <p>Wednesday: 09:00 - 22:00</p>
        <p>Thursday: 09:00 - 22:00</p>
        <p>Friday: 09:00 - 22:00</p>
        <p>Saturday: 09:00 - 23:00</p>
        <p>Sunday: 09:00 - 23:00</p>
        <p>Phone Number: +44 020 82 673 234</p>
        <a href="">Website</a>
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
