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
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";
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
  useStyles,
}) {
  const classes = useStyles();
  const [inputs, setInputs] = useState({
    title,
    description,
    img,
    price,
    people,
  });
  const [file, setFile] = useState([]);
  const [newTitle, setTitle] = useState(title);
  const [newDescription, setDescription] = useState(description);
  const [newPrice, setPrice] = useState(price);
  const [newPeople, setPeople] = useState(people);
  const [newDate, setNewDate] = useState(date);
  const [newPlace, setNewPlace] = useState(place);
  const isAdmin = useSelector((store) => store.admin);

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function uploadHandler(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  }
  // function inputsHandler(e) {
  //   setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // }

  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append("title", newTitle);
    formData.append("description", newDescription);
    formData.append("date", newDate);
    formData.append("price", newPrice);
    formData.append("people", newPeople);
    formData.append("place", newPlace);
    formData.append("pic", file);
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>',file);
    dispatch(editEvent(id, formData));
    handleClose();
  }

  function onPlaceSelect(newPlace) {
    console.log(
      "select",
      newPlace.properties.address_line1 +
        " ," +
        newPlace.properties.address_line2
    );
    setNewPlace(
      newPlace.properties.address_line1 +
        ", " +
        newPlace.properties.address_line2
    );
  }

  function onSuggectionChange(newPlace) {
    console.log("change", newPlace);
  }

  function preprocessHook(newPlace) {
    return `${newPlace}, Munich, Germany`;
  }

  function postprocessHook(feature) {
    return feature.properties.street;
  }

  function suggestionsFilter(suggestions) {
    const processedStreets = [];

    const filtered = suggestions.filter((value) => {
      if (
        !value.properties.street ||
        processedStreets.indexOf(value.properties.street) >= 0
      ) {
        return false;
      } else {
        processedStreets.push(value.properties.street);
        return true;
      }
    });

    return filtered;
  }

  function test(e) {
    console.log(e.target.value);
  }

  return (
    <div className="story event">
      <PopupState variant="popover" popupId="demo-popup-popover">
        {(popupState) => (
          <div id={id}>
            <Card sx={{ width: 305, position: "relative", height: "400px" }}>
              <CardMedia
                component="img"
                height="250"
                src={`${process.env.REACT_APP_API_URL}/static${img}`}
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
                <div className="description-popup">
                  <strong>Place: </strong> {place}
                </div>

                <div className="description-popup">
                  <strong>Date: </strong>
                  {date}
                </div>
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
                  src={`${process.env.REACT_APP_API_URL}/static${img}`}
                  // image={img}
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
        <Box
          sx={style}
          name="pic"
          onSubmit={(e) => submitHandler(e)}
          component="form"
          encType="multipart/form-data"
          autoComplete="off"
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
            name="title"
            required
            id="outlined-required"
            label="Title"
            value={newTitle}
            onChange={(event) => setTitle(event.target.value)}
          />
          {/* <TextField
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
            name="image"
            required
            id="outlined-required"
            label="Image"
            value={inputs.image}
            onChange={inputsHandler}
          /> */}
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
            name="price"
            required
            id="outlined-required"
            label="Price"
            value={newPrice}
            onChange={(event) => setPrice(event.target.value)}
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
              renderInput={(params) => (
                <TextField
                  {...params}
                  classes={{
                    root: classes.root,
                  }}
                  sx={{
                    svg: { color: "#711d6f" },
                    input: { color: "#711d6f" },
                    label: { color: " #711d6f" },
                    "& label": { color: "#711d6f" },
                    "& label.Mui-focused": {
                      color: "#711d6f",
                    },
                    "& legend": {
                      color: "#711d6f",
                    },
                  }}
                />
              )}
            />
          </LocalizationProvider>
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
            name="people"
            required
            id="outlined-required"
            label="People"
            value={newPeople}
            onChange={(event) => setPeople(event.target.value)}
          />
          {/* <TextField
            name="place"
            required
            id="outlined-required"
            label="Place"
            value={inputs.place}
            onChange={inputsHandler}
          /> */}
          <>
            <input
              name="pic"
              accept="image/*"
              className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              type="file"
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
          </>
          <GeoapifyContext apiKey={process.env.REACT_APP_API_INPUT}>
            <GeoapifyGeocoderAutocomplete
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
              placeSelect={onPlaceSelect}
              suggestionsChange={onSuggectionChange}
              // value={newPlace}
            />
          </GeoapifyContext>
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
            name="description"
            value={newDescription}
            aria-label="description"
            placeholder="Event description"
            style={{
              resize: "none",
              fontSize: 16,
              height: "150px",
              backgroundColor: "rgba(255,255,255, 0.1)",
            }}
            onChange={(event) => setDescription(event.target.value)}
          />
          <Button
            id={id}
            // onClick={() => {submitHandler(inputs)}}
            variant="text"
            type="submit"
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
                color: "#fff", // theme.palette.primary.main
              },
            }}
          >
            Edit Event
          </Button>
          <Button
            variant="text"
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
                color: "#fff", // theme.palette.primary.main
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
