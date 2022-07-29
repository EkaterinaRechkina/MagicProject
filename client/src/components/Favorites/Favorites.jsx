import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Favorites.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteFavorites } from "../../redux/actions/favorites.action";

function Favorites() {
  const dispatch = useDispatch();

  const deleteFavHandler = (id) => {
    dispatch(deleteFavorites(id));
  };

  const favoritesProduct = useSelector((store) => store.favorites);

  if (favoritesProduct.length === 0) {
    return (
      <div className="wrap">
        <ul className="ulFav">
          <p>No favorites yet(</p>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="wrap">
        <ul className="ulFav">
          {favoritesProduct.map((item) => (
            <li key={item.id} className="liFav" id={item.id}>
              <div className="itemLiImg">
                <img
                  src={`${process.env.REACT_APP_API_URL}/static${item.img}`}
                  alt="#"
                  className="imageFav"
                />
              </div>
              <p className="itemLiTitle">{item.title}</p>
              <p className="itemLiPrice">$: {item.price}</p>
              <Button
                id={item.id}
                onClick={() => deleteFavHandler(item.id)}
                className="itemLiButton"
              >
                <DeleteIcon />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Favorites;
