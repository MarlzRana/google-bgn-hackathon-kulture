import styles from "./Events.module.css";

import ListItem from "./ListItem";
import EventsRightSection from "./EventsRightSection";
import { useNavigate } from "react-router-dom";

import NottingHillCarni from "./notting-hill-carni.jpg";
import ChineseNewYear from "./chinese-new-year.jpg";

function Events() {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <div className={styles.foodListItemContainer}>
        <ListItem
          imgSrc={NottingHillCarni}
          culture={"Caribbean"}
          name={"Notting Hill Carnival"}
          location={"Notting Hill"}
          description={
            "The Notting Hill Carnival is an annual Caribbean festival event that has taken place in London since 1966 on the streets of the Notting Hill area of Kensington, each August over two days."
          }
          btnColor={"pink"}
        />
        <ListItem
          imgSrc={ChineseNewYear}
          culture={"Chinese"}
          name={"New Year Party"}
          location={"Charing Cross London"}
          description={
            "Chinese New Year is the festival that celebrates the beginning of a new year on the traditional lunisolar and solar Chinese calendar."
          }
          btnColor={"pink"}
        />
      </div>

      <EventsRightSection />
      <button
        className={styles.addFoodSpot}
        onClick={() => navigate("/mainApp/foodAdd")}
      >
        +
      </button>
    </div>
  );
}

export default Events;
