import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
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
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#1d1c4d",
        display: "flex",
        justifyContent: "flex-start",
        padding: " 10px 30px",
      }}
    >
      <Box sx={{ display: { xs: "flex" } }}>
        <MenuItem key={1} onClick={handleCloseNavMenu}>
          <Link to="team" className="link">
            Team
          </Link>
        </MenuItem>

        <MenuItem key={2} onClick={handleCloseNavMenu}>
          <Link to="contacts" className="link">
            Contacts
          </Link>
        </MenuItem>
      </Box>
    </AppBar>
  );
};
export default Footer;
