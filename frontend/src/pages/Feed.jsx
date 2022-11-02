import styles from "./Feed.module.css";
import FeedCard from "./FeedCard";
import ThumbsUpImg from "./thumbs-up.png";
import ThumbsDownImg from "./thumbs-down.png";

import res1 from "./res1.mp4";
import res2 from "./res2.mp4";
import res3 from "./res3.mp4";
import res4 from "./res4.mp4";
import res5 from "./res5.mp4";
import res6 from "./res6.mp4";

import even1 from "./even1.mp4";
import even2 from "./even2.mp4";
import even3 from "./even3.mp4";

import com1 from "./igbo-dance.mp4";

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
        <FeedCard onSwipe={onSwipe} videoUrl={res6}></FeedCard>
        <FeedCard onSwipe={onSwipe} videoUrl={com1}></FeedCard>
        <FeedCard onSwipe={onSwipe} videoUrl={res5}></FeedCard>
        <FeedCard onSwipe={onSwipe} videoUrl={res4}></FeedCard>
        <FeedCard onSwipe={onSwipe} videoUrl={even3}></FeedCard>
        <FeedCard onSwipe={onSwipe} videoUrl={res3}></FeedCard>
        <FeedCard onSwipe={onSwipe} videoUrl={even2}></FeedCard>
        <FeedCard onSwipe={onSwipe} videoUrl={res2}></FeedCard>
        <FeedCard onSwipe={onSwipe} videoUrl={even1}></FeedCard>
        <FeedCard onSwipe={onSwipe} videoUrl={res1}></FeedCard>
      </div>
      <div className={styles.rightSection}>
        <img src={ThumbsUpImg} alt="" />
      </div>
    </div>
  );
}

export default Feed;
