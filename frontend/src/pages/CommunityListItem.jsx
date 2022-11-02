import styles from "./CommunityListItem.module.css";
function CommunityListItem({ img, culture, name, location, description }) {
  return (
    <div className={styles.main}>
      <div className={styles.leftSection}>
        <img src={img} alt="" />
      </div>
      <div className={styles.rightSection}>
        <h2>
          {culture} - {name}
        </h2>
        <p>📍 {location}</p>
        <p>{description}</p>
        <div className={styles.rightSectionLeft}>
          <button>Find out more</button>
        </div>
      </div>
    </div>
  );
}

export default CommunityListItem;
