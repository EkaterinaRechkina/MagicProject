import React, { useEffect, useState } from "react";
import style from "../Profile/Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { addEvent } from "../../redux/actions/event.action";

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
    dispatch(addEvent(title, description, place, img, price, date, people));
    closeForm();
    setTitle("");
    setDescription("");
    setImg("");
    setPrice("");
    setDate("");
    setPeople("");
    setPlace("");
  }

  return (
    <>
      <Button
        onClick={openForm}
        variant="outlined"
        sx={{
          margin: "20px 30px",
          display: "flex",
          justifyContent: "flex-start",
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
            <TextField
              required
              id="outlined-required"
              label="Date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="People"
              value={people}
              onChange={(event) => setPeople(event.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Place"
              value={place}
              onChange={(event) => setPlace(event.target.value)}
            />

            <TextareaAutosize
              value={description}
              aria-label="description"
              placeholder="Event description"
              style={{ width: 400, height: 300, resize: "none", fontSize: 16 }}
              onChange={(event) => setDescription(event.target.value)}
            />
            <Button
              variant="outlined"
              type="submit"
              sx={{ width: 200, marginTop: 2 }}
            >
              Add Event
            </Button>
            <Button
              variant="outlined"
              sx={{ width: 200, marginTop: 2 }}
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
