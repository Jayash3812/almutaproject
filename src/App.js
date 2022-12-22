import "./App.css";
import { Landing } from "./components/Home-page/ServicesComponent/Landing";
import LoginPage from "./components/LoginPage/LoginPage";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Nearby } from "./components/Near by/Nearby";
import { Contactus } from "./components/Contact Us/Contactus";
import { History } from "./components/History/History";
import Services from "./components/Home-page/ServicesComponent/Services";
import Popular from "./components/Home-page/PopularServices/Popular";
import Footer from "./components/Footer/Footer";
import { Home } from "./components/Home-page/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        {/* <Popular /> */}
        {/* <Services /> */}

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/nearby" element={<Nearby />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/history" element={<History />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      <div className="container">
        {/* <Landing/> */}

        {/* <Nav/> */}
        {/* <LoginPage /> */}
      </div>
    </div>
  );
}

export default App;
