import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { addEvent } from "../../redux/actions/event.action";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import {
  GeoapifyGeocoderAutocomplete,
  GeoapifyContext,
} from "@geoapify/react-geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

function AddEventForm({ useStyles }) {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [people, setPeople] = useState("");
  const [place, setPlace] = useState("");
  const [file, setFile] = useState([]);
  const [open, setOpen] = useState(false);

  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);
  const dispatch = useDispatch();

  function uploadHandler(e) {
    setFile(e.target.files[0]);
  }

  function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("date", date);
    formData.append("price", price);
    formData.append("people", people);
    formData.append("place", place);
    formData.append("pic", file);

    dispatch(addEvent(formData));
    closeForm();
    setTitle("");
    setDescription("");
    setImg("");
    setPrice("");
    setDate("");
    setPeople("");
    setPlace("");
  }

  function onPlaceSelect(place) {
    setPlace(
      place.properties.address_line1 + ", " + place.properties.address_line2
    );
  }

  function onSuggectionChange(value) {
    
  }

  function preprocessHook(value) {
    return `${value}, Munich, Germany`;
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

  return (
    <>
      {/* <form
        name="pic"
        onSubmit={(e) => uploadHandler(e)}
        method="post"
        encType="multipart/form-data"
      >
        <input type="file" name="pic" />
        <input type="submit" name="pic" />
      </form> */}
      {/* <Button variant="contained" component="label">
        Upload File
        <input type="file" hidden />
      </Button> */}

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
        ADD EVENT
      </Button>
      {open && (
        <Box
          method="post"
          name="pic"
          onSubmit={(e) => submitHandler(e)}
          component="form"
          encType="multipart/form-data"
          sx={{ "& .MuiTextField-root": { m: 1, width: "45ch" } }}
          // noValidate
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
              name="title"
              id="outlined-required"
              label="Title"
              value={title}
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
              required
              id="outlined-required"
              label="Image"
              value={img}
              onChange={(event) => setImg(event.target.value)}
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
              required
              id="outlined-required"
              label="Price"
              name="price"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
            {/* <TextField
              required
              id="outlined-required"
              label="Date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            /> */}
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date"
                value={date}
                onChange={(newValue) => {
                  setDate(newValue.toDateString());
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
              required
              name="people"
              id="outlined-required"
              label="People"
              value={people}
              onChange={(event) => setPeople(event.target.value)}
            />
            {/* <TextField
              required
              id="outlined-required"
              label="Place"
              value={place}
              onChange={(event) => setPlace(event.target.value)}
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
                // onChange={(event) => setPlace(event.target.value)}
                // value={place}
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
              value={description}
              name="description"
              aria-label="description"
              placeholder="Event description"
              style={{
                width: 400,
                height: 300,
                resize: "none",
                fontSize: 16,
                marginTop: "10px",
              }}
              onChange={(event) => setDescription(event.target.value)}
            />
            <Button
              variant="outlined"
              type="submit"
              sx={{
                marginTop: 2,
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
              Add Event
            </Button>
            <Button
              variant="outlined"
              sx={{
                marginTop: 2,
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
              onClick={closeForm}
            >
              Close
            </Button>
          </div>
        </Box>
      )}
    </>
  );
}

export default AddEventForm;
