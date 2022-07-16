import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "../Story/Story";
import "./product.css";
import { addToCart } from "../../hooks/cartActions";

function Product({item}) {
  return (
    <Card sx={{ maxWidth: 205, position: "relative", margin: 10 }}>
      <CardMedia component="img" height="200" image={item.img} alt="" />

      <div className="story product">
        <div className="title">{item.title}</div>
        <div className="description-popup ">{item.description}</div>
        <div className="description-popup ">Price: {item.price}</div>
        <div className="description-popup ">Author: {item.author}</div>
        <CardActions>
          <Button
            onClick={() => addToCart(item)}
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
