import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import Logout from "./components/Logout/Logout";
import Map from "./components/Map/Map";
import AllStories from "./components/AllStories/AllStories";
import Profile from "./components/Profile/Profile";
import Shop from "./components/Shop/Shop";
import Main from "./components/Main/Main";
import UserProducts from "./components/UserProducts/UserProducts";
import AllEvents from "./components/AllEvents/AllEvents";
import Calendar from "./components/Calendar/Calendar";
import Cart from "./components/Cart/Cart";
import Test from "./components/Test";
import Favorites from "./components/Favorites/Favorites";
import {
  createTheme,
  makeStyles,
  createStyles,
  Theme as AugmentedTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import { orange, blue, green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      // color: green[900],
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "rgba(0, 0, 0, 0.23)",
          color: "#000", // default
        },

        "&.Mui-focused fieldset": {
          border: "2px solid #711d6f",
          // color: #711d6f",
        },
        "&.Mui-focused textareaAutosize": {
          border: "2px solid #711d6f",
          // color: #711d6f",
        },
      },
    },
  })
);

const theme = createTheme({});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/registration"
              element={<Registration useStyles={useStyles} />}
            />
            <Route path="/login" element={<Login useStyles={useStyles} />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/map" element={<Map />} />
            <Route
              path="/events"
              element={<AllEvents useStyles={useStyles} />}
            />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/stories"
              element={<AllStories useStyles={useStyles} />}
            />
            <Route
              path="/profile"
              element={<Profile useStyles={useStyles} />}
            />
            <Route
              path="/yourproducts"
              element={<UserProducts useStyles={useStyles} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
