import { useParams } from "react-router-dom";
import MainAppUpperNavbar from "./MainAppUpperNavbar";
import MainAppLowerNavbar from "./MainAppLowerNavbar";
import Food from "./Food";
import Events from "./Events";
import Feed from "./Feed";
import Chat from "./Chat";
import Communities from "./Communities";
import styles from "./MainApp.module.css";
import AddFoodPlaceWidget from "./AddFoodPlaceWidget";
import JapaneseFoodImg from "./japanese-food-place.png";
import ChineseFoodPlace from "./chinese-restaurant.jpg";
import NigerianRestaurant from "./nigerian-restaurant.jpg";
import IndianRestaurant from "./indian-restaurant.jpg";

import FoodDisplay from "./FoodDisplay";
function MainApp() {
  const subpageName = useParams().subPage;
  return (
    <div className={styles.main}>
      <MainAppUpperNavbar className={styles.uppernav} />
      <div className={styles.content}>
        {subpageName === "food" ? <Food /> : <></>}
        {subpageName === "foodAdd" ? <AddFoodPlaceWidget /> : <></>}
        {subpageName === "foodDisplay1" ? (
          <FoodDisplay
            img={JapaneseFoodImg}
            name={"Hot Stones"}
            culture={"Japanese"}
            website={"https://hotstonelondon.com/"}
          />
        ) : (
          <></>
        )}
        {subpageName === "foodDisplay2" ? (
          <FoodDisplay
            img={NigerianRestaurant}
            name={"Enish Africa"}
            culture={"Nigerian"}
            website={
              "https://www.ubereats.com/gb/store/enish-nigerian-restaurant-lewisham/2WEYBO02QiehpzFQcETjpg"
            }
          />
        ) : (
          <></>
        )}
        {subpageName === "foodDisplay3" ? (
          <FoodDisplay
            img={IndianRestaurant}
            name={"Chopper Chimney"}
            culture={"Indian"}
            website={"https://copperchimney.uk/"}
          />
        ) : (
          <></>
        )}
        {subpageName === "foodDisplay4" ? (
          <FoodDisplay
            img={ChineseFoodPlace}
            name={"Dragon Inn"}
            culture={"Chinese"}
            website={"https://dragoninn-online.co.uk/"}
          />
        ) : (
          <></>
        )}
        {subpageName === "events" ? <Events /> : <></>}
        {subpageName === "feed" ? <Feed /> : <></>}
        {subpageName === "communities" ? <Communities /> : <></>}
        {subpageName === "chat" ? <Chat /> : <></>}
      </div>
      <MainAppLowerNavbar subpageName={subpageName} />
    </div>
  );
}

export default MainApp;
