import React, { useState } from "react";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  deleteProduct,
  addProduct,
} from "../../redux/actions/product.action";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { Box, Modal, TextField } from "@mui/material";
import "../Story/Story";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "rgba(255,255,255, 0.9)",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

function OneUserProduct({
  id,
  author,
  title,
  description,
  img,
  price,
  useStyles,
}) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newPrice, setNewPrice] = useState(price);
  const [file, setFile] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function uploadHandler(e) {
    setFile(e.target.files[0]);
  }

  function deleteProductHandler(id) {
    dispatch(deleteProduct(id));
  }

  function submitHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("title", newTitle);
    formData.append("description", newDescription);
    formData.append("price", newPrice);
    formData.append("product", file);

    dispatch(editProduct(id, formData));
    handleClose();
    dispatch(addProduct());
  }

  return (
    <div className="story oneProduct">
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div id={id}>
            <Card sx={{ width: 205, position: "relative", margin: 0 }}>
              <CardMedia
                component="img"
                height="200"
                image={`${process.env.REACT_APP_API_URL}/static${img}`}
                alt=""
                {...bindTrigger(popupState)}
              />

              <CardContent sx={{ height: 120 }}>
                <Button id={id} sx={{ position: "absolute", top: 5, right: 0 }}>
                  <DeleteIcon onClick={() => deleteProductHandler(id)} />
                </Button>
                <Button
                  id={id}
                  sx={{ position: "absolute", top: 5, right: 35 }}
                >
                  <EditIcon onClick={handleOpen} />
                </Button>
                <div className="title">{title}</div>
                <div>Price $: {price}</div>
                <div>Seller: {author}</div>
              </CardContent>
            </Card>

            <Popover
              {...bindPopover(popupState)}
              anchorOrigin={{
                vertical: "center",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "center",
                horizontal: "center",
              }}
            >
              <div className="popup">
                <CardMedia
                  component="img"
                  height="350"
                  image={`${process.env.REACT_APP_API_URL}/static${img}`}
                  alt={title}
                />
                <div className="title-popup"> {title}</div>
                <div className="description-popup ">{description}</div>
              </div>
            </Popover>
          </div>
        )}
      </PopupState>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          method="put"
          name="pic"
          onSubmit={(e) => submitHandler(e)}
          component="form"
          encType="multipart/form-data"
          autoComplete="off"
        >
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
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            id="standard-basic"
            label="Title"
            required
          />
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
            onChange={(event) => setNewDescription(event.target.value)}
            value={newDescription}
            id="standard-basic"
            label="Description"
            required
          />
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
            type="number"
            onChange={(event) => setNewPrice(event.target.value)}
            value={newPrice}
            id="standard-basic"
            label="Price"
            required
          />
          <Button
            id={id}
            type="submit"
            sx={{
              margin: "0 auto",
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
            size="small"
          >
            Submit
          </Button>
          <Button
            size="small"
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
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

export default OneUserProduct;
