import { useParams } from "react-router-dom";
import MainAppUpperNavbar from "./MainAppUpperNavbar";
import MainAppLowerNavbar from "./MainAppLowerNavbar";
import Food from "./Food";
import Events from "./Events";
import Feed from "./Feed";
import styles from "./MainApp.module.css";
import AddFoodPlaceWidget from "./AddFoodPlaceWidget";
function MainApp() {
  const subpageName = useParams().subPage;
  return (
    <div className={styles.main}>
      <MainAppUpperNavbar className={styles.uppernav} />
      <div className={styles.content}>
        {subpageName === "food" ? <Food /> : <></>}
        {subpageName === "foodAdd" ? <AddFoodPlaceWidget /> : <></>}
        {subpageName === "events" ? <Events /> : <></>}
        {subpageName === "feed" ? <Feed /> : <></>}
      </div>
      <MainAppLowerNavbar subpageName={subpageName} />
    </div>
  );
}

export default MainApp;
