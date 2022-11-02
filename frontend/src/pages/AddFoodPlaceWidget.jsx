import styles from "./AddFoodPlaceWidget.module.css";
function AddFoodPlaceWidget() {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <h2>List your a food spot!</h2>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Culture" />
          <select>
            <option value="restaurant">Restaurant</option>
            <option value="culture">Culture</option>
          </select>
          <textarea type="text" placeholder="Opening Hours" />
          <textarea type="text" placeholder="Description" />
          <input type="text" placeholder="Phone Number" />
          <input type="text" placeholder="Website" />
          <textarea type="text" placeholder="Menu Link" />
          <textarea type="text" placeholder="Full Address" />
          <input type="submit" value="Create" />
        </form>
      </div>
    </div>
  );
}

export default AddFoodPlaceWidget;
