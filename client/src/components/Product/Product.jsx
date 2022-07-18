import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "../Story/Story";
import "./product.css";
import { addToCart } from "../../redux/actions/cartActions";

function Product({ item }) {
  return (
    <div className="card-product">
      <Card sx={{ position: "relative", margin: 0, width: 205 }}>
        <CardMedia
          component="img"
          height="200"
          image={item.img}
          alt=""
          sx={{ width: "100%" }}
        />

        <div className="story product">
          <div className="title product-title">{item.title}</div>
          <div className="description-popup description-product ">
            {item.description}
          </div>
          <div className="description-popup ">Price $: {item.price}</div>
          <div className="description-popup author-product">
            Seller: {item.author}
          </div>
          <CardActions>
            <Button
              onClick={() => addToCart(item)}
              size="small"
              sx={{
                color: "#3e8ec1",
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
                color: "#3e8ec1",
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
    </div>
  );
}

export default Product;
