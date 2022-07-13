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
import Tarot from "./components/Apis/Tarot";
import YesNo from "./components/Apis/YesNo";
import AllStories from "./components/AllStories/AllStories";
import Profile from "./components/Profile/Profile";
import Shop from "./components/Shop/Shop";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main /> } />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/map" element={<Map />} />
          <Route path="/events" element={<Event />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/stories" element={<AllStories />} />
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
