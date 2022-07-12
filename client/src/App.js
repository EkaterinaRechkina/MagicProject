import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Map from "./components/Map/Map";
import Event from "./components/Event/Event";
import Story from "./components/Story/Story";
import Product from "./components/Product/Product";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/map" element={<Map />} />
          <Route path="/events" element={<Event />} />
          <Route path="/shop" element={<Product />} />
          <Route path="/stories" element={<Story />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
