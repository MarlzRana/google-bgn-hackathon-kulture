import styles from "./MainAppLowerNavbar.module.css";

import foodImg from "./food.png";
import eventsImg from "./events.png";
import feedImg from "./feed.png";
import communities from "./communities.png";
import chat from "./chat.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function MainAppLowerNavbar({ subpageName }) {
  const navigate = useNavigate();
  return (
    <nav className={styles.main}>
      <button
        style={{
          backgroundColor: subpageName === "food" ? "var(--main-green)" : "",
        }}
        onClick={() => navigate("/mainApp/food")}
      >
        <img src={foodImg} alt="" />
      </button>
      <button
        style={{
          backgroundColor: subpageName === "events" ? "var(--main-yellow)" : "",
        }}
        onClick={() => navigate("/mainApp/events")}
      >
        <img src={eventsImg} alt="" />
      </button>
      <button
        style={{
          backgroundColor: subpageName === "feed" ? "var(--main-pink)" : "",
        }}
        onClick={() => navigate("/mainApp/feed")}
      >
        <img src={feedImg} alt="" />
      </button>
      <button
        onClick={() => navigate("/mainApp/communities")}
        style={{
          backgroundColor:
            subpageName === "communities" ? "var(--main-dark-blue)" : "",
        }}
      >
        <img src={communities} alt="" />
      </button>
      <button
        onClick={() => navigate("/mainApp/chat")}
        style={{
          backgroundColor:
            subpageName === "chat" ? "var(--main-dark-orange)" : "",
        }}
      >
        <img src={chat} alt="" />
      </button>
    </nav>
  );
}

export default MainAppLowerNavbar;
