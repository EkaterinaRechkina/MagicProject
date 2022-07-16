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
import { useSelector } from "react-redux";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import "../Story/story.css";

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
  const [inputs, setInputs] = useState({});
  const [newDate, setNewDate] = useState("");
  const isAdmin = useSelector((store) => store.admin);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function inputsHandler(e) {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function editHandler() {
    dispatch(editEvent(id, inputs));
    handleClose();
  }
  return (
    <div className="story event">
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
                {isAdmin ? (
                  <Button
                    id={id}
                    sx={{ position: "absolute", top: 5, right: 0 }}
                  >
                    {<DeleteIcon onClick={() => dispatch(delEvent(id))} />}
                  </Button>
                ) : null}

                {isAdmin ? (
                  <Button
                    id={id}
                    sx={{ position: "absolute", top: 5, right: 35 }}
                  >
                    <EditIcon onClick={handleOpen} />
                  </Button>
                ) : null}

                <div className="title">{title}</div>
                <div className="description-popup">Place: {place}</div>

                <div className="description-popup">Date: {date}</div>
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
              <div className="popup">
                <CardMedia
                  component="img"
                  height="350"
                  image={img}
                  alt={title}
                />
                <div className="title-popup">{title}</div>
                <div className="description-popup text"> Place: {place}</div>
                <div className="description-popup"> {description}</div>
                <div className="description-popup text"> Ticket: ${price}</div>
                <div className="description-popup text">
                  {people} - person(s) will come
                  <div className="description-popup text">
                    Date of event: {date}
                  </div>
                </div>
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
            name="title"
            required
            id="outlined-required"
            label="Title"
            value={inputs.title}
            onChange={inputsHandler}
          />
          <TextField
            name="image"
            required
            id="outlined-required"
            label="Image"
            value={inputs.image}
            onChange={inputsHandler}
          />
          <TextField
            name="price"
            required
            id="outlined-required"
            label="Price"
            value={inputs.price}
            onChange={inputsHandler}
          />
          {/* <TextField
            name="date"
            required
            id="outlined-required"
            label="Date"
            value={inputs.date}
            onChange={inputsHandler}
          /> */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Date"
              value={newDate}
              onChange={(newValue) => {
                setNewDate(newValue.toDateString());
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            name="people"
            required
            id="outlined-required"
            label="People"
            value={inputs.people}
            onChange={inputsHandler}
          />
          <TextField
            name="place"
            required
            id="outlined-required"
            label="Place"
            value={inputs.place}
            onChange={inputsHandler}
          />

          <TextareaAutosize
            name="description"
            value={inputs.description}
            aria-label="description"
            placeholder="Event description"
            style={{
              resize: "none",
              fontSize: 16,
              height: "150px",
              backgroundColor: "rgba(255,255,255, 0.1)",
            }}
            onChange={inputsHandler}
          />
          <Button
            id={id}
            onClick={() => {
              console.log(inputs);
              editHandler(inputs);
            }}
            variant="text"
            type="submit"
            size="small"
            sx={{
              width: "200px",
              margin: "1% auto",
              color: "#2b256f",
            }}
          >
            Edit Event
          </Button>
          <Button
            variant="text"
            size="small"
            sx={{
              width: "200px",
              margin: "1% auto",
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
