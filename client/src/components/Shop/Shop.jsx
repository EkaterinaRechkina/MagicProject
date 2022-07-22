import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Product from "../Product/Product";
import style from "./Shop.module.css";

export default function Shop() {
  const [query, setQuery] = useState("");
  const [inputMin, setInputMin] = useState("");
  const [inputMax, setInputMax] = useState("");
  const products = useSelector((store) => store.product);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_API_URL}/shop?q=${query}`, {
          withCredentials: true,
        })
        .then((response) => {
          if (inputMin === "" && inputMax === "") {
            dispatch({
              type: "GET_PRODUCT",
              payload: response.data,
            });
          } else if (inputMin < 0 || inputMax < 0) {
            dispatch({
              type: "GET_PRODUCT",
              payload: [],
            });
          } else {
            if (inputMax === "") {
              dispatch({
                type: "GET_PRODUCT",
                payload: response.data.filter(
                  (item) => +item.price >= inputMin && +item.price <= 99999
                ),
              });
            } else {
              dispatch({
                type: "GET_PRODUCT",
                payload: response.data.filter(
                  (item) => +item.price >= inputMin && +item.price <= inputMax
                ),
              });
            }
          }
        });
    };
    fetchProducts();
  }, [query, inputMin, inputMax]);

  return (
    <div className={style.body}>
      <div className={style.filter}>
        <div className={style.inputs}>
          <div>
            <p>Search</p>
            <input
              type="text"
              placeholder="Search..."
              className={style.search}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div>
            <p>Price</p>
          </div>

          <div className={style.filters_inputs}>
            <div>
              <label className={style.filter_price_label}>
                <span className={style.filter_price_text}>from</span>
                <input
                  type="number"
                  value={inputMin}
                  onChange={(e) => setInputMin(e.target.value)}
                  min="0"
                  max="99999"
                  placeholder="0"
                  className={style.filter_price}
                />
                <span className={style.filter_price_text}>$</span>
              </label>
            </div>

            <div>
              <label className={style.filter_price_label}>
                <span className={style.filter_price_text}>to</span>
                <input
                  type="number"
                  value={inputMax}
                  onChange={(e) => setInputMax(e.target.value)}
                  min="0"
                  max="99999"
                  placeholder="99999"
                  className={style.filter_price}
                />
                <span className={style.filter_price_text}>$</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <ul className={style.ulProducts}>
        {products.length === 0 ? (
          <h1>Sorry, we can't find what you looking for</h1>
        ) : (
          products.map((item) => <Product key={item.id} item={item} />)
        )}
      </ul>
    </div>
  );
}
