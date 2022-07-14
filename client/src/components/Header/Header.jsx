import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
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

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuth(dispatch);
  }, [dispatch]);

  const isAuth = useSelector((store) => store.auth);

  const navigate = useNavigate();

  function logoutHandler() {
    axios
      .post("http://localhost:3001/logout", {}, { withCredentials: true })
      .then((response) => {
        localStorage.clear();
        checkAuth(dispatch);
      });
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

          <Link to="/"> HOME </Link>

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
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <MenuItem key={1} onClick={handleCloseNavMenu}>
                <Link to="shop">Shop </Link>
              </MenuItem>

              <MenuItem key={2} onClick={handleCloseNavMenu}>
                <Link to="stories">Stories </Link>
              </MenuItem>

              <MenuItem key={3} onClick={handleCloseNavMenu}>
                <Link to="map">Our places</Link>
              </MenuItem>

              <MenuItem key={4} onClick={handleCloseNavMenu}>
                <Link to="events">Our events </Link>
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
            <Link to="shop" key={5}>
              Shop
            </Link>

            <Link to="stories" key={6}>
              Stories
            </Link>

            <Link to="map" key={7}>
              Our places
            </Link>

            <Link to="events" key={8}>
              Our events
            </Link>
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
              {isAuth ? (
                <div>
                  <MenuItem key={9} onClick={handleCloseUserMenu}>
                    <Link to="profile"> Profile </Link>
                  </MenuItem>
                  <MenuItem key={10} onClick={handleCloseUserMenu}>
                    <Link to="/yourproducts"> Your products </Link>
                  </MenuItem>
                  <MenuItem key={11} onClick={logoutHandler}>
                    <Link to="/"> Выйти </Link>
                  </MenuItem>
                </div>
              ) : (
                <div>
                  <MenuItem key={12} onClick={handleCloseUserMenu}>
                    <Link to="login"> Войти </Link>
                  </MenuItem>
                  <MenuItem key={13} onClick={handleCloseUserMenu}>
                    <Link to="registration"> Зарегистрироваться </Link>
                  </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
