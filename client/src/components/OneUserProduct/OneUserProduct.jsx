import React, { useState } from "react";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, deleteProduct } from "../../redux/actions/product.action";
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

  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};
function OneUserProduct({ id, author, title, description, img, price }) {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newImg, setNewImg] = useState(img);
  const [newPrice, setNewPrice] = useState(price);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function deleteProductHandler(id) {
    dispatch(deleteProduct(id));
  }

  function editHandler(id, title, description, img, price) {
    dispatch(editProduct(id, title, description, img, price));
    handleClose();
  }

  return (
    <div className="story">
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div id={id}>
            <Card sx={{ maxWidth: 205, position: "relative", margin: 5 }}>
              <CardMedia
                component="img"
                height="200"
                image={img}
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
                <div>Price: {price}</div>
                <div>Author: {author}</div>
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
                  image={img}
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
        <Box sx={style}>
          <TextField
            required
            id="outlined-required"
            label="Image"
            value={newImg}
            onChange={(event) => setNewImg(event.target.value)}
          />
          <TextField
            onChange={(event) => setNewTitle(event.target.value)}
            value={newTitle}
            id="standard-basic"
            label="Title"
            variant="standard"
            required
          />
          <TextField
            onChange={(event) => setNewDescription(event.target.value)}
            value={newDescription}
            id="standard-basic"
            label="Description"
            variant="standard"
            required
          />
          <TextField
            onChange={(event) => setNewPrice(event.target.value)}
            value={newPrice}
            id="standard-basic"
            label="Price"
            variant="standard"
            required
          />
          <Button
            id={id}
            sx={{
              color: "#2b256f",
            }}
            size="small"
            onClick={() =>
              editHandler(id, newTitle, newDescription, newImg, newPrice)
            }
          >
            Submit
          </Button>
          <Button
            size="small"
            sx={{
              color: "#2b256f",
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
