import React from "react";
import Story from "../Story/Story";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import { display } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { addStory, setStories } from "../../redux/actions/story.action";
import { getUserInfo } from "../../redux/actions/userActions";
import "./allStories.css";

export default function AllStories() {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [img, setImg] = useState(null);
  // const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostsPerPage] = useState(10);

  const [open, setOpen] = useState(false);
  const openForm = () => setOpen(true);
  const closeForm = () => setOpen(false);

  const dispatch = useDispatch();
  const story = useSelector((store) => store.story);

  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  const user = useSelector((store) => store.user);

  function submitHandler(event) {
    event.preventDefault();
    dispatch(addStory(title, description, img));
    closeForm();
    setTitle("");
    setDescription("");
    setImg("");
  }

  useEffect(() => {
    dispatch(setStories());
  }, []);

  console.log("user", user);

  return (
    <>
      {user.length == 0 ? (
        ""
      ) : (
        <Button
          onClick={openForm}
          variant="outlined"
          sx={{
            margin: "20px 30px",
            display: "flex",
            justifyContent: "flex-start",

            border: "1px solid #2b256f",
            color: "#2b256f",
          }}
        >
          Add your story
        </Button>
      )}

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
              required
              value={description}
              aria-label="description"
              placeholder="Your story"
              style={{
                width: 400,
                height: 300,
                resize: "none",
              }}
              onChange={(event) => setDescription(event.target.value)}
            />

            <Button
              variant="outlined"
              type="submit"
              sx={{
                border: "1px solid #2b256f",
                width: "200px",
                marginTop: 2,
                color: "#2b256f",
              }}
            >
              Add story
            </Button>

            <Button
              variant="outlined"
              sx={{
                border: "1px solid #2b256f",
                width: "200px",
                marginTop: 2,
                color: "#2b256f",
              }}
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
