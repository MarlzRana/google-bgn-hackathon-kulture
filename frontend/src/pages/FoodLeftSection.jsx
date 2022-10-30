import styles from "./FoodLeftSection.module.css";
import searchImg from "./search.png";
function FoodLeftSection() {
  return (
    <div className={styles.leftSection}>
      <h1>Check out these new food spots!</h1>
      <img src={searchImg} alt="" />
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <select name="" id="">
          <option value="name">Name</option>
          <option value="culture">Culture</option>
        </select>
        <button>Search</button>
      </div>
    </div>
  );
}

export default FoodLeftSection;
