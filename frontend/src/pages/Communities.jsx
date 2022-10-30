import styles from "./Communities.module.css";
import CommunitiesImg from "./communities.png";
import CommunityListItem from "./CommunityListItem";
function Communities() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <img src={CommunitiesImg} alt="" />
        <h2>Communities</h2>
      </div>
      <div className={styles.communitiesContainer}>
        <CommunityListItem />
        <CommunityListItem />
        <CommunityListItem />
        <CommunityListItem />
        <CommunityListItem />
      </div>
    </div>
  );
}

export default Communities;
