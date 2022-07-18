import React, {useEffect, useState} from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Star from "@mui/icons-material/Star"
import "../Story/Story";
import "./product.css";
import { addToCart } from "../../redux/actions/cart.actions";
import { useDispatch } from "react-redux";

function Product({item}) {
  const dispatch = useDispatch();


import {addFavorites, deleteFavorites, editFavorites} from "../../redux/actions/favorites.action";
import {useDispatch, useSelector} from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";


function Product({item}) {
    const [status, setStatus] = useState(true);
    const dispatch = useDispatch();

    const favoritesProduct = useSelector((store) => store.favorites);

    const addFavHandler = (id) => {
        setStatus(!status);
        let count = 0;
        if (favoritesProduct.length === 0) {
            dispatch(addFavorites(id));
        } else {
            favoritesProduct.forEach(item => {
                for (let key in item) {
                    if (key === 'id' && id !== item[key]) {
                        count++;
                    }
                }
            });
            if (count === favoritesProduct.length) {
                dispatch(addFavorites(id))
            }
        }
    }

    const deleteFavHandler = (id) => {
        setStatus(!status);
        dispatch(deleteFavorites(id, status));
    }

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
               onClick={() => dispatch(addToCart(item))}
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
            {status ? (
                    <Button id = {item.id} size="small" sx={{color: "#2ca1c7", position: "absolute", bottom: 5, right: 0,}}
                            onClick={() => addFavHandler(item.id)}>
                        <StarBorderIcon />
                    </Button>
                ) :
                (
                    <Button id = {item.id} size="small" sx={{color: "#2ca1c7", position: "absolute", bottom: 5, right: 0,}}
                            onClick={() => deleteFavHandler(item.id)}>
                        <Star />
                    </Button>
                )}
            
          </CardActions>
        </div>
      </Card>
    </div>


  );
}

export default Product;
