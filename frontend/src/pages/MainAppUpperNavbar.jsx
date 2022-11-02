import styles from "./MainAppUpperNavbar.module.css";
import logo from "./logo.png";
function MainAppNavbar() {
  return (
    <nav className={styles.main}>
      <div className={styles.leftSection}></div>
      <div className={styles.middleSection}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.rightSection}></div>
    </nav>
  );
}

export default MainAppNavbar;
