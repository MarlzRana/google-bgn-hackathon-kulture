import "./App.css";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUp.jsx";
import MainApp from "./pages/MainApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";

const globalState = {
  accountId: 1,
};

function App() {
  const globalStateContext = createContext(globalState);
  return (
    <globalStateContext.Provider value={globalState}>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/signUp" element={<SignUpPage />}></Route>

          <Route path="/mainApp/:subPage" element={<MainApp />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <MyGlobe /> */}
    </globalStateContext.Provider>
  );
}

export default App;
