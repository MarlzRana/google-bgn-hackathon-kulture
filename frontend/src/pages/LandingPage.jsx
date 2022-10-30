import { useNavigate } from "react-router-dom";
import styles from "./LandingPage.module.css";
import logo from "./logo.png";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <h1 className={styles.present}>Kulture</h1>
        </div>
        <div className={styles.right}>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/signUp")}>Sign Up</button>
        </div>
      </nav>
      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.contentRight}>
          <h2>Unifying society through embracing culture</h2>
          <p>
            We connect you with people from your culture and other cultures you
            may be interested in
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
