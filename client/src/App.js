import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        {/* <Routes>
          <Route
            path="/"
            element={}
          />
        
        </Routes> */}
        text
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
