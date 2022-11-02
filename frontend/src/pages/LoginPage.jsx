import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import logo from "./logo.png";
import Axios from "axios";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const login = async () => {
    try {
      // console.log(username);
      // console.log(process.env.REACT_APP_APIHOSTADDRESS + "/auth/login");
      // const res = await Axios.post(
      //   process.env.REACT_APP_APIHOSTADDRESS + "/auth/login",
      //   { username }
      // );
      // console.log(res);
      navigate("/mainApp/feed");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.loginWidget}>
        <div className={styles.topSection}>
          <img src={logo} alt="" />
          <h1>Login</h1>
        </div>
        <div className={styles.middleSection}>
          <div className={styles.inputTile}>
            <input
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
          </div>
          <div className={styles.inputTile}>
            <input placeholder="Password" type="password"></input>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <button onClick={login}>Sign In!</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
