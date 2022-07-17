import React, { useEffect, useState } from "react";
import style from "../Profile/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input } from "@mui/material";
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
import { width } from "@mui/system";

function AddEventForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState("");
  const [people, setPeople] = useState("");
  const [place, setPlace] = useState("");

  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();
    dispatch(addEvent(title, description, date, img, price, people, place));
    closeForm();
    setTitle("");
    setDescription("");
    setImg("");
    setPrice("");
    setDate("");
    setPeople("");
    setPlace("");
  }
  const [value, setValue] = useState({});
  function onPlaceSelect(value) {
    console.log(value);
  }

  function onSuggectionChange(value) {
    console.log(value);
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
      <Button
        onClick={openForm}
        variant="outlined"
        sx={{
          margin: "20px 30px",
          display: "flex",
          color: "#2b256f",
          width: "200px",
          textAlign: "center",
          border: "1px solid #2b256f",
        }}
      >
        ADD EVENT
      </Button>
      {open && (
        <Box
          onSubmit={submitHandler}
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "45ch" } }}
          noValidate
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
              required
              id="outlined-required"
              label="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Image"
              value={img}
              onChange={(event) => setImg(event.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Price"
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
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              required
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

            <GeoapifyContext apiKey={process.env.REACT_APP_API_INPUT}>
              <GeoapifyGeocoderAutocomplete
                placeSelect={onPlaceSelect}
                suggestionsChange={onSuggectionChange}
                onChange={(event) => setPlace(event.target.value)}
                value={place}
              />
            </GeoapifyContext>

            <TextareaAutosize
              value={description}
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
                width: 200,
                marginTop: 2,
                color: "#2b256f",
                border: "1px solid #2b256f",
              }}
            >
              Add Event
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: 200,
                marginTop: 2,
                color: "#2b256f",
                border: "1px solid #2b256f",
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
