import styles from "./EventsRightSection.module.css";
import searchImg from "./search.png";
function EventsRightSection() {
  return (
    <div className={styles.leftSection}>
      <h1>Go and explore a new culture at an event!</h1>
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

export default EventsRightSection;
