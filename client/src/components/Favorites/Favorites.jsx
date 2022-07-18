import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from './Favorites.module.css';
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CardContent from "@mui/material/CardContent";
import {deleteProduct} from "../../redux/actions/product.action";
import {deleteFavorites} from "../../redux/actions/favorites.action";

function Favorites() {

    const dispatch = useDispatch();

    const deleteFavHandler = (id) => {
        dispatch(deleteFavorites(id));
    }

    const favoritesProduct = useSelector((store) => store.favorites);

    if (favoritesProduct.length === 0) {
        return (
            <div className={style.wrap}>
                <ul className={style.ulFav}>
                    <p>Товаров нет!</p>
                </ul>
            </div>
        );
    } else {
        return (
            <div className={style.wrap}>
                <ul className={style.ulFav}>
                    {favoritesProduct.map(item =>
                        <li key={item.id} className={style.liFav} id={item.id}>
                            <img src={item.img} alt="#" className={style.imageFav}/>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                            <Button id={item.id} onClick={() => deleteFavHandler(item.id)}>
                                <DeleteIcon />
                            </Button>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Favorites;
