import styles from "./FeedCard.module.css";
import TinderCard from "react-tinder-card";
function FeedCard({ videoUrl, onSwipe }) {
  return (
    <TinderCard
      swipeThreshold={999}
      onSwipe={onSwipe}
      preventSwipe={["up", "down"]}
      className={styles.main}
    >
      <video className="opportunity-video" autoPlay muted loop>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.info}>
        <h2>Mosob Restaurants</h2>
        <p>An upcoming and new restaurant</p>
      </div>
    </TinderCard>
  );
}

export default FeedCard;
