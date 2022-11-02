import { useNavigate } from "react-router-dom";
import styles from "./FoodListItem.module.css";

function ListItem({
  imgSrc,
  culture,
  name,
  location,
  description,
  btnColor,
  redirect,
}) {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.leftSection}>
        <img src={imgSrc} alt="" />
      </div>
      <div className={styles.rightSection}>
        <h2>
          {culture} - {name}
        </h2>
        <p>📍{location}</p>
        <p>{description}</p>
        <div className={styles.rightSectionLeft}>
          <button
            style={{
              backgroundColor: btnColor === "pink" ? "var(--main-pink)" : "",
              color: btnColor === "pink" ? "white" : "",
            }}
            onClick={() => navigate(redirect)}
          >
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
