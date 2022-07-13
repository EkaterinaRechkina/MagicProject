import React from "react";
import Story from "../Story/Story";
import { Button } from "@mui/material";
import "./allStories.css";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { display } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { addStory, setStories } from "../../redux/actions/story.action";

export default function AllStories() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);

  const dispatch = useDispatch();

  const story = useSelector((store) => store.story);

  function submitHandler(event) {
    event.preventDefault();
    console.log("add story");
    dispatch(addStory(title, description, img));
    closeForm();
    setTitle("");
    setDescription("");
    setImg("");
  }

  useEffect(() => {
    dispatch(setStories());
  }, []);

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
        Add your story
      </Button>
      {open && (
        <Box
          onSubmit={submitHandler}
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "45ch",
            },
          }}
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
            <TextareaAutosize
              value={description}
              aria-label="description"
              placeholder="Your story"
              style={{ width: 400, height: 300, resize: "none" }}
              onChange={(event) => setDescription(event.target.value)}
            />

            <Button
              variant="outlined"
              type="submit"
              sx={{ width: 200, marginTop: 2 }}
            >
              Add story
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

      <div className="stories">
        {story &&
          story.map((element) => <Story key={element.id} {...element} />)}
      </div>
    </>
  );
}
