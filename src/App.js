import "./App.css";
import { Landing } from "./components/ServicesComponent/Landing";
import LoginPage from "./components/LoginPage/LoginPage";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Nav/Home";
import { Nearby } from "./components/Near by/Nearby";
import { Contactus } from "./components/Contact Us/Contactus";
import { History } from "./components/History/History";
import Services from "./components/ServicesComponent/Services";
import Popular from "./components/PopularServices/Popular";
import Footer from "./components/Footer/Footer";

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
