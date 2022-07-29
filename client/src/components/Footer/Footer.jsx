import * as React from "react";
import { AppBar, Box, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
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
        </Box>
      </AppBar>
    </div>
  );
};
export default Footer;
