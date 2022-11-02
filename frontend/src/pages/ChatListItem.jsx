import styles from "./ChatListItem.module.css";
import JapaneseFoodPlace from "./japanese-food-place.png";
function ChatListItem({ img, culture, name, memberCount, message }) {
  return (
    <div className={styles.main}>
      <div className={styles.leftSection}>
        <img src={img} alt="" />
      </div>
      <div className={styles.rightSection}>
        <h2>
          {culture} - {name}
        </h2>
        <p>Members: {memberCount}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatListItem;
