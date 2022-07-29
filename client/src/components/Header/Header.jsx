import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "../../hooks/checkAuth";
import { useEffect } from "react";
import { checkAdmin } from "../../hooks/checkAdmin";
import {
  AppBar,
  Box,
  Toolbar,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../images/logo.svg";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const isAuth = useSelector((store) => store.auth);
  const isAdmin = useSelector((store) => store.admin);

  function logoutHandler() {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/logout`,
        {},
        { withCredentials: true }
      )
      .then((response) => {
        localStorage.clear();
        dispatch(checkAuth());
        dispatch(checkAdmin());
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
          padding: 0,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  md: "none",
                },
              }}
            >
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
                <MenuItem key={15} onClick={handleCloseNavMenu}>
                  <Link to="/" className="link-sidebar">
                    <img
                      src={logo}
                      alt="logo"
                      style={{
                        width: "45px",
                        height: "45px",
                        alignContent: "center",
                      }}
                    />
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
                  justifyContent: "flex-start",
                  gap: "5%",
                },
              }}
            >
              <Link to="/" key={16} className="link link-home">
                <div className="link-home">
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      width: "55px",
                      height: "55px",
                      alignContent: "center",
                    }}
                  />
                  Home
                </div>
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
                <IconButton onClick={handleOpenUserMenu} sx={{ padding: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={require("../../images/penta.png")}
                  />
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
                    <Link to="profile" className="link-sidebar">
                      <MenuItem key={9} onClick={handleCloseUserMenu}>
                        <p className="link-sidebar">Profile</p>
                      </MenuItem>
                    </Link>

                    <Link to="yourproducts" className="link-sidebar">
                      <MenuItem key={10} onClick={handleCloseUserMenu}>
                        <p className="link-sidebar"> My goods</p>
                      </MenuItem>
                    </Link>
                    {!isAdmin ? (
                      <>
                        <Link to="cart" className="link-sidebar">
                          <MenuItem key={11} onClick={handleCloseUserMenu}>
                            <p className="link-sidebar"> My cart</p>
                          </MenuItem>
                        </Link>

                        <Link to="favorites" className="link-sidebar">
                          <MenuItem key={12} onClick={handleCloseUserMenu}>
                            <p className="link-sidebar"> My favorites</p>
                          </MenuItem>
                        </Link>
                      </>
                    ) : null}
                    <Link to="/" className="link-sidebar">
                      <MenuItem key={13} onClick={logoutHandler}>
                        <p className="link-sidebar"> Logout</p>
                      </MenuItem>
                    </Link>
                  </div>
                ) : (
                  <div>
                    <Link to="login" className="link-sidebar">
                      <MenuItem key={14} onClick={handleCloseUserMenu}>
                        <p className="link-sidebar"> Sign in</p>
                      </MenuItem>
                    </Link>

                    <Link to="registration" className="link-sidebar">
                      <MenuItem key={15} onClick={handleCloseUserMenu}>
                        <p className="link-sidebar"> Sign up</p>
                      </MenuItem>
                    </Link>
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
