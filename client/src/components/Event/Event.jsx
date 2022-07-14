import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import { Modal, Popover, TextareaAutosize, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { delEvent, editEvent } from "../../redux/actions/event.action";
import { Box } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
 };

export default function Event({
  id,
  title,
  description,
  date,
  img,
  price,
  people,
  place,
}) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newDate, setNewDate] = useState(date);
  const [newImg, setNewImg] = useState(img);
  const [newPrice, setNewPrice] = useState(price);
  const [newPeople, setNewPeople] = useState(people);
  const [newPlace, setNewPlace] = useState(place);



  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function editHandler(id, newTitle, newDescription,
    newDate,
    newImg,
    newPrice,
    newPeople,
    newPlace
  ) {
    dispatch(
      editEvent(id,
        newTitle,
        newDescription,
        newDate,
        newImg,
        newPrice,
        newPeople,
        newPlace,
      )
    );
    handleClose();
  }
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
                  <DeleteIcon onClick={() => dispatch(delEvent(id))} />
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
                  {place}
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
                <strong>{title}</strong>
                <br />
                <br />
                Place: {place}
                <br />
                <br />
                {description}
                <br />
                <br />
                <br />
                <br />
                Ticket: ${price}
                <br />
                {people} - person(s) will come
                <br />
                When: {date}
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
            label="Title"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Image"
            value={newImg}
            onChange={(event) => setNewImg(event.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Price"
            value={newPrice}
            onChange={(event) => setNewPrice(event.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Date"
            value={newDate}
            onChange={(event) => setNewDate(event.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="People"
            value={newPeople}
            onChange={(event) => setNewPeople(event.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Place"
            value={newPlace}
            onChange={(event) => setNewPlace(event.target.value)}
          />

          <TextareaAutosize
            value={newDescription}
            aria-label="description"
            placeholder="Event description"
            style={{ resize: "none", fontSize: 16 }}
            onChange={(event) => setNewDescription(event.target.value)}
          />
          <Button
             id={id}
            onClick={() => editHandler(id, newTitle, newDescription, newDate, newImg, newPrice, newPeople, newPlace)}
            variant="outlined"
            type="submit"
            sx={{ width: 200, marginTop: 2 }}
          >
            Add Event
          </Button>
          <Button 
            variant="outlined"
            sx={{ width: 200, marginTop: 2 }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </>
  );
}
