import * as React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../../hooks/checkAuth";
import { useEffect } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ImgProfile from "../../witch.jpg";
import { Divider } from "@mui/material";
import { Link } from "@mui/material";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth(dispatch);
  }, []);

  const isAuth = useSelector((store) => store.auth);
  console.log("isAuth =>", isAuth);

  const navigate = useNavigate();
  // const [isAuth, setIsAuth] = useState(true);

  function logoutHandler() {
    axios
      .post("http://localhost:3001/logout", {}, { withCredentials: true })
      .then((response) => {
        localStorage.clear();
        checkAuth(dispatch);
      });

    navigate("/");
  }

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#1d1c4d" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/"> HOME </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key={1} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="shop">Shop </Link>
                </Typography>
              </MenuItem>

              <MenuItem key={2} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="stories">Stories </Link>
                </Typography>
              </MenuItem>

              <MenuItem key={3} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="map">Our places</Link>
                </Typography>
              </MenuItem>

              <MenuItem key={4} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link to="events">Our events </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              key={1}
              onClick={() => {
                navigate("/shop");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Shop
            </Button>

            <Button
              key={2}
              onClick={() => {
                navigate("/stories");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Stories
            </Button>

            <Button
              key={3}
              onClick={() => {
                navigate("/map");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Our places
            </Button>

            <Button
              key={4}
              onClick={() => {
                navigate("/events");
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Our events
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={ImgProfile} />
              </IconButton>
            </Tooltip>

            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={5} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">
                  <Link to="profile">Profile</Link>
                </Typography>
              </MenuItem>
              <Divider />
              {isAuth ? (
                <MenuItem key={6} onClick={logoutHandler}>
                  <Typography textAlign="center">
                    <div>
                      <p>Выйти</p>
                    </div>
                  </Typography>
                </MenuItem>
              ) : (
                <>
                  <MenuItem key={7} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to="login">Войти</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem key={8} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">
                      <Link to="registration">Зарегистрироваться</Link>
                    </Typography>
                  </MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
