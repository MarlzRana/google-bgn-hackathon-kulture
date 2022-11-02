import { useState } from "react";
import styles from "./FoodLeftSection.module.css";
import searchImg from "./search.png";
function FoodLeftSection({ search }) {
  const [selectValue, setSelectValue] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className={styles.leftSection}>
      <h1>Check out these new food spots!</h1>
      <img src={searchImg} alt="" />
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select name="" id="" onChange={(e) => setSelectValue(e.target.value)}>
          <option value="name">Name</option>
          <option value="culture">Culture</option>
        </select>
        <button onClick={() => search(selectValue, searchQuery)}>Search</button>
      </div>
    </div>
  );
}

export default FoodLeftSection;
