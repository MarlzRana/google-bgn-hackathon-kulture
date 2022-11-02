import styles from "./Chat.module.css";
import ChatListItem from "./ChatListItem";

import AfricanGospelChoir from "./african-gospel-choir.jpg";
import BollywoodDancing from "./bollywood-dancing.jpg";
import IgboDancing from "./igbo-dancingjpg.jpg";
function Chat() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h2>Updates</h2>
      </div>
      <div className={styles.chatContainer}>
        <ChatListItem
          img={AfricanGospelChoir}
          culture={"African"}
          name={"Gospel Choir"}
          memberCount={"257"}
          message={
            "Hi, hope you're all having a good week. Just remind everyone choir practice is this Sunday at Westminster Cathedral. Light refreshments will be available and we hope to see you there!"
          }
        />
        <ChatListItem
          img={BollywoodDancing}
          culture={"Indian"}
          name={"Bollywood Dancing Club"}
          memberCount={"658"}
          message={
            "Hey everyone!! We are having our next session in the Royal Albert Hall! How exciting!! Please remember to bring some food and drink along and let's have a great time! Also it's this will be happening this Saturday at 10PM"
          }
        />
        <ChatListItem
          img={AfricanGospelChoir}
          culture={"African"}
          name={"Gospel Choir"}
          memberCount={"257"}
          message={
            "Good morning! We are having at outreach session this Thursday at 1PM in Lewisham Church. IF you are interested in finding out what our Gospel choir is all about feel free to join us this Sunday at 6PM. We can't wait to see you there!"
          }
        />
        <ChatListItem
          img={IgboDancing}
          culture={"Nigerian"}
          name={"Igbo Dance Club"}
          memberCount={"932"}
          message={
            "Atilogwu is a spirited youth dance from the Igbo ethnic group of Nigeria that focuses on vigorous body movement and often includes acrobatics. We are having a session this Friday at King's Cross Theatre, feel to join us at 7PM this Monday!"
          }
        />
      </div>
    </div>
  );
}

export default Chat;
