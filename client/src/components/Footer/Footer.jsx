import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

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
    <AppBar position="static">
      <Box sx={{ display: { xs: "flex" } }}>
        <MenuItem key={1} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">
            <Link to="team">Team </Link>
          </Typography>
        </MenuItem>

        <MenuItem key={2} onClick={handleCloseNavMenu}>
          <Typography textAlign="center">
            <Link to="contacts">Contacts </Link>
          </Typography>
        </MenuItem>
      </Box>
    </AppBar>
  );
};
export default Footer;
