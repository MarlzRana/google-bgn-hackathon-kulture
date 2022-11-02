import styles from "./Communities.module.css";
import CommunitiesImg from "./communities.png";
import CommunityListItem from "./CommunityListItem";
import AfricanGospelChoir from "./african-gospel-choir.jpg";
import BollywoodDancing from "./bollywood-dancing.jpg";
import IgboDancing from "./igbo-dancingjpg.jpg";

function Communities() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <img src={CommunitiesImg} alt="" />
        <h2>Communities</h2>
      </div>
      <div className={styles.communitiesContainer}>
        <CommunityListItem
          img={AfricanGospelChoir}
          culture={"African"}
          name={"Gospel Choir"}
          location={"London"}
          description={
            "'This is where the London African Gospel Choir was born,' says founder and director Crystal Kassi. We've turned off a busy south east London street into a secluded enclave ringed by trees and terraced house."
          }
        />
        <CommunityListItem
          img={BollywoodDancing}
          culture={"Indian"}
          name={"Bollywood Dancing Club"}
          location={"Westminster London"}
          description={
            "Bollywood Dance is the name given to the dance-form used in Indian (Hindi) films. The most energetic and colorful Indian dance forms are Bhangra and Garba (originated in the state of Gujarat, India)."
          }
        />
        <CommunityListItem
          img={IgboDancing}
          culture={"Nigerian"}
          name={"Igbo Dance Club"}
          location={"North West London"}
          description={
            "Atilogwu is a spirited youth dance from the Igbo ethnic group of Nigeria that focuses on vigorous body movement and often includes acrobatics."
          }
        />
      </div>
    </div>
  );
}

export default Communities;
