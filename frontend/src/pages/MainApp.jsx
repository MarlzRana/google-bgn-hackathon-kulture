import { useParams } from "react-router-dom";
import MainAppUpperNavbar from "./MainAppUpperNavbar";
import MainAppLowerNavbar from "./MainAppLowerNavbar";
import Food from "./Food";
import Events from "./Events";
import Feed from "./Feed";
import Communities from "./Communities";
import styles from "./MainApp.module.css";
import AddFoodPlaceWidget from "./AddFoodPlaceWidget";
import FoodDisplay from "./FoodDisplay";
function MainApp() {
  const subpageName = useParams().subPage;
  return (
    <div className={styles.main}>
      <MainAppUpperNavbar className={styles.uppernav} />
      <div className={styles.content}>
        {subpageName === "food" ? <Food /> : <></>}
        {subpageName === "foodAdd" ? <AddFoodPlaceWidget /> : <></>}
        {subpageName === "foodDisplay" ? <FoodDisplay /> : <></>}
        {subpageName === "events" ? <Events /> : <></>}
        {subpageName === "feed" ? <Feed /> : <></>}
        {subpageName === "communities" ? <Communities /> : <></>}
      </div>
      <MainAppLowerNavbar subpageName={subpageName} />
    </div>
  );
}

export default MainApp;
