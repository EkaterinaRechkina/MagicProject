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
    <div className="footer">
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#711d6f",
          display: "flex",
          justifyContent: "flex-start",
          padding: " 10px 250px",
        }}
      >
        <Box sx={{ display: { xs: "flex" } }}>
          <MenuItem key={1}>
            <Link to="team" className="link">
              Our Team
            </Link>
          </MenuItem>

          <MenuItem key={2}>
            <Link to="project" className="link">
              About our project
            </Link>
          </MenuItem>
        </Box>
      </AppBar>
    </div>
  );
};
export default Footer;
