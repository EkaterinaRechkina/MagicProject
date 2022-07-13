import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { deleteStory, editStory } from "../../redux/actions/story.action";
import { useDispatch } from "react-redux";
import { Modal, Box, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

export default function Story({ id, title, description, img, author }) {
  const dispatch = useDispatch();

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newImg, setNewImg] = useState(img);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function deleteStoryHandler(id) {
    dispatch(deleteStory(id));
  }

  function editHandler(id, title, description, img) {
    console.log("edit");
    dispatch(editStory(id, title, description, img));
    handleClose();
  }

  // нужен state  === author  показывай редак/удаление
  return (
    <>
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div id={id}>
            <Card sx={{ maxWidth: 305, position: "relative" }}>
              <CardMedia
                component="img"
                height="350"
                image={img}
                alt={title}
                {...bindTrigger(popupState)}
              />
              <CardContent>
                <Button id={id} sx={{ position: "absolute", top: 5, right: 0 }}>
                  <DeleteIcon onClick={() => deleteStoryHandler(id)} />
                </Button>

                <Button
                  id={id}
                  sx={{ position: "absolute", top: 5, right: 35 }}
                >
                  <EditIcon onClick={handleOpen} />
                </Button>

                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Author {author}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small"></Button>
              </CardActions>
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
              <Typography
                sx={{ width: "650px", height: "600px", padding: "40px" }}
              >
                <CardMedia
                  component="img"
                  height="350"
                  image={img}
                  alt={title}
                />
                <br />
                <br />
                {title}
                <br />
                <br />
                <br />
                {description}
              </Typography>
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
            required
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
          <Button
            id={id}
            size="small"
            onClick={() => editHandler(id, newTitle, newDescription, newImg)}
          >
            Submit
          </Button>
          <Button size="small" onClick={handleClose}>
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}
