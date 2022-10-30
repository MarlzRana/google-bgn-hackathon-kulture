import styles from "./Feed.module.css";
import FeedCard from "./FeedCard";
import ThumbsUpImg from "./thumbs-up.png";
import ThumbsDownImg from "./thumbs-down.png";
function Feed() {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  return (
    <div className={styles.main}>
      <div className={styles.leftSection}>
        <img src={ThumbsDownImg} alt="" />
      </div>
      <div className={styles.middleSection}>
        <FeedCard
          onSwipe={onSwipe}
          videoUrl={
            "https://iliveinthe.uk/videos/volunteerhub/CANCER-RESEARCH.mp4"
          }
        ></FeedCard>
        <FeedCard
          onSwipe={onSwipe}
          videoUrl={
            "https://iliveinthe.uk/videos/volunteerhub/CANCER-RESEARCH.mp4"
          }
        ></FeedCard>
        <FeedCard
          onSwipe={onSwipe}
          videoUrl={"https://iliveinthe.uk/videos/volunteerhub/WOODLARKS.mp4"}
        ></FeedCard>
        <FeedCard
          onSwipe={onSwipe}
          videoUrl={
            "https://iliveinthe.uk/videos/volunteerhub/NATIONALTRUST.mp4"
          }
        ></FeedCard>
        <FeedCard
          onSwipe={onSwipe}
          videoUrl={
            "https://iliveinthe.uk/videos/volunteerhub/HEARTFOUNDATION.mp4"
          }
        ></FeedCard>
      </div>
      <div className={styles.rightSection}>
        <img src={ThumbsUpImg} alt="" />
      </div>
    </div>
  );
}

export default Feed;
