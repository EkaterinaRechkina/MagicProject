import React, { useEffect, useState } from "react";
import style from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "../../redux/actions/userActions";
import { addProduct } from "../../redux/actions/product.action";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import AddEventForm from "../AddEventForm/AddEventForm";
import { checkAdmin } from "../../hooks/checkAdmin";
import { checkAuth } from "../../hooks/checkAuth";

function Profile({ useStyles }) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState("");

  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(checkAdmin());
    dispatch(getUserInfo());
  }, [dispatch]);

  const user = useSelector((store) => store.user);
  const isAdmin = useSelector((store) => store.admin);

  function uploadHandler(e) {
    setFile(e.target.files[0]);
  }

  function submitHandler(event) {
    event.preventDefault();
    const user_id = user[0];
    const author = user[1];
    const formData = new FormData(event.target);
    formData.append("user_id", user_id);
    formData.append("author", author);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("product", file);

    dispatch(addProduct(formData));
    closeForm();
    setTitle("");
    setDescription("");
    setPrice(0);
  }

  return (
    <div className={style.wrap}>
      <div className={style.profile}>
        <div className={style.image_profile}>
          <img src={require("../../images/profile.png")} alt="#" />
        </div>
        <div className={style.info_profile}>
          <div className={style.heading_profile}>
            <h1 className={style.title}>Welcome, {user[1]}!</h1>
          </div>
          <div className={style.text_profile}>
            <p>What are you willing to offer?</p>
          </div>
          <Button
            onClick={openForm}
            variant="outlined"
            sx={{
              width: "200px",
              border: "none",
              color: "#2b256f",
              textAlign: "center",
              ":hover": {
                border: "none",
                bgcolor: "#eba7d0",
                color: "#fff", // theme.palette.primary.main
              },
            }}
          >
            Sell something
          </Button>
        </div>
      </div>
      <div>
        {isAdmin ? (
          <>
            <p className="title">Admin</p>
            <AddEventForm useStyles={useStyles} />
          </>
        ) : null}
      </div>
      {open && (
        <Box
          method="post"
          name="pic"
          onSubmit={(e) => submitHandler(e)}
          component="form"
          encType="multipart/form-data"
          sx={{ "& .MuiTextField-root": { m: 1, width: "45ch" } }}
          autoComplete="off"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              classes={{
                root: classes.root,
              }}
              sx={{
                "& label": { color: "#711d6f" },
                "& label.Mui-focused": {
                  color: "#711d6f",
                },
                "& legend": {
                  color: "#711d6f",
                },
              }}
              required
              id="outlined-required"
              label="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
              name="product"
              accept="image/*"
              className={classes.input}
              id="raised-button-file"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => uploadHandler(e)}
            />
            <label htmlFor="raised-button-file">
              <Button
                variant="raised"
                component="span"
                sx={{
                  margin: "10px 0",
                  color: "#711d6f",
                  ":hover": {
                    border: "none",
                    bgcolor: "#eba7d0",
                    color: "#fff",
                  },
                }}
              >
                Upload Image
              </Button>
            </label>
            <TextField
              classes={{
                root: classes.root,
              }}
              sx={{
                "& label": { color: "#711d6f" },
                "& label.Mui-focused": {
                  color: "#711d6f",
                },
                "& legend": {
                  color: "#711d6f",
                },
              }}
              required
              type="number"
              id="outlined-required"
              label="Price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            <TextareaAutosize
              classes={{
                root: classes.root,
              }}
              sx={{
                "& label": { color: "#711d6f" },
                "& label.Mui-focused": {
                  color: "#711d6f",
                },
                "& legend": {
                  color: "#711d6f",
                },
              }}
              maxLength={50}
              value={description}
              aria-label="description"
              placeholder="Product description 50 symbols"
              style={{ width: 400, height: 80, resize: "none", fontSize: 16 }}
              onChange={(event) => setDescription(event.target.value)}
            />
            <Button
              variant="outlined"
              type="submit"
              sx={{
                margin: "2% auto",
                width: "200px",
                border: "none",
                color: "#2b256f",
                textAlign: "center",
                ":hover": {
                  border: "none",
                  bgcolor: "#eba7d0",
                  color: "#fff",
                },
              }}
            >
              Add product
            </Button>
            <Button
              variant="outlined"
              sx={{
                margin: "0 auto",
                width: "200px",
                border: "none",
                color: "#2b256f",
                textAlign: "center",
                ":hover": {
                  border: "none",
                  bgcolor: "#eba7d0",
                  color: "#fff",
                },
              }}
              onClick={closeForm}
            >
              Close
            </Button>
          </div>
        </Box>
      )}
    </div>
  );
}

export default Profile;
