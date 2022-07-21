import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Favorites.module.css";
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
      <div className={style.wrap}>
        <ul className={style.ulFav}>
          <p>No favorites yet(</p>
        </ul>
      </div>
    );
  } else {
    return (
      <div className={style.wrap}>
        <ul className={style.ulFav}>
          {favoritesProduct.map((item) => (
            <li key={item.id} className={style.liFav} id={item.id}>
              <div className={`${style.itemLiImg}`}>
                <img src={`${process.env.REACT_APP_API_URL}/static${item.img}`}
                alt="#" className={`${style.imageFav}`} />
              </div>
              <p className={`${style.itemLiTitle}`}>{item.title}</p>
              <p className={`${style.itemLiPrice}`}>$: {item.price}</p>
              <Button
                id={item.id}
                onClick={() => deleteFavHandler(item.id)}
                className={`${style.itemLiButton}`}
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
