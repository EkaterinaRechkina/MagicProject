import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { useEffect } from "react";
import FutureApi from "./components/Apis/FutureApi";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Logout from "./components/Logout/Logout";

import Map from "./components/Map/Map";
import Event from "./components/Event/Event";
import Story from "./components/Story/Story";
import Product from "./components/Product/Product";
import Tarot from "./components/Apis/Tarot";
import YesNo from "./components/Apis/YesNo";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FutureApi /> <Tarot /> <YesNo />{" "}
              </>
            }
          />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/map" element={<Map />} />
          <Route path="/events" element={<Event />} />
          <Route path="/shop" element={<Product />} />
          <Route path="/stories" element={<Story />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
