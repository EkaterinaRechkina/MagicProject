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
import logo from "../../images/logo.svg";
import "./header.css";

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
    <div className="header">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#711d6f",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                <img
                  src={logo}
                  style={{
                    width: "45px",
                    height: "45px",
                    alignContent: "center",
                  }}
                />
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
                <MenuItem key={15} onClick={handleCloseNavMenu}>
                  <Link to="/" className="link-sidebar">
                    Home
                  </Link>
                </MenuItem>
                <MenuItem key={1} onClick={handleCloseNavMenu}>
                  <Link to="shop" className="link-sidebar">
                    Shop
                  </Link>
                </MenuItem>

                <MenuItem key={2} onClick={handleCloseNavMenu}>
                  <Link to="stories" className="link-sidebar">
                    Stories
                  </Link>
                </MenuItem>

                <MenuItem key={3} onClick={handleCloseNavMenu}>
                  <Link to="map" className="link-sidebar">
                    Our places
                  </Link>
                </MenuItem>

                <MenuItem key={4} onClick={handleCloseNavMenu}>
                  <Link to="events" className="link-sidebar">
                    Our events
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                },
              }}
            >
              <img
                src={logo}
                style={{
                  width: "55px",
                  height: "55px",
                  alignContent: "center",
                }}
              />
              <Link to="/" key={16} className="link">
                Home
              </Link>

              <Link to="shop" key={5} className="link">
                Shop
              </Link>

              <Link to="stories" key={6} className="link">
                Stories
              </Link>

              <Link to="map" key={7} className="link">
                Our places
              </Link>

              <Link to="events" key={8} className="link">
                Our events
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open profile">
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
                      <Link to="profile" className="link-sidebar">
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem key={10} onClick={logoutHandler}>
                      <Link to="/" className="link-sidebar">
                        Logout
                      </Link>
                    </MenuItem>
                  </div>
                ) : (
                  <div>
                    <MenuItem key={11} onClick={handleCloseUserMenu}>
                      <Link to="login" className="link-sidebar">
                        Sign in
                      </Link>
                    </MenuItem>
                    <MenuItem key={12} onClick={handleCloseUserMenu}>
                      <Link to="registration" className="link-sidebar">
                        Sign up
                      </Link>
                    </MenuItem>
                  </div>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
