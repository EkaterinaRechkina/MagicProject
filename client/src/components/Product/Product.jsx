import React from "react";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "../Story/Story";
import "./product.css";

function Product({ author, title, description, img, price }) {
  return (
    <Card sx={{ maxWidth: 205, position: "relative", margin: 5 }}>
      <CardMedia component="img" height="200" image={img} alt="" />

      <div className="story product">
        <div className="title">{title}</div>
        <div className="description-popup ">{description}</div>
        <div className="description-popup ">Price: {price}</div>
        <div className="description-popup ">Author: {author}</div>
        <CardActions>
          <Button
            size="small"
            sx={{
              color: "#2ca1c7",
              position: "absolute",
              bottom: 5,
              right: 40,
            }}
          >
            <LocalGroceryStoreIcon />
          </Button>
          <Button
            size="small"
            sx={{
              color: "#2ca1c7",
              position: "absolute",
              bottom: 5,
              right: 0,
            }}
          >
            <StarBorderIcon />
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default Product;
