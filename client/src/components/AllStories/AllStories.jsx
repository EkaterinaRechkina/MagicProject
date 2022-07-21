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
import { makeStyles } from "@material-ui/core/styles";
import "./allStories.css";

export default function AllStories({ useStyles }) {
  const classes = useStyles();
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [file, setFile] = useState('');
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

  function uploadHandler(e) {
    setFile(e.target.files[0]);
  }

  function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('title', title);
    formData.append('description', description);
    formData.append("storypic", file);

    dispatch(addStory(formData));
    closeForm();
    setTitle("");
    setDescription("");
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

            border: "none",
            color: "#2b256f",
            ":hover": {
              bgcolor: "#eba7d0", // theme.palette.primary.main
              border: "none",
              color: "#fff",
            },
          }}
        >
          Add your story
        </Button>
      )}

      {open && (
          <Box
              method="post"
              name="pic"
              onSubmit={(e) => submitHandler(e)}
              component="form"
              encType="multipart/form-data"
              sx={{ "& .MuiTextField-root": { m: 1, width: "45ch" } }}
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
              id="outlined-required"
              label="Title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <input
                name="storypic"
                accept="image/*"
                className={classes.input}
                id="raised-button-file"
                type="file"
                style={{ display: 'none' }}
                onChange={(e) => uploadHandler(e)}
            />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span" className={classes.button}>
                Upload Image
              </Button>
            </label>
            <TextareaAutosize
              classes={{
                root: classes.root,
              }}
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
                border: "none",
                width: "200px",
                marginTop: 2,
                color: "#2b256f",
                ":hover": {
                  border: "none",
                  bgcolor: "#eba7d0",
                  color: "#fff", // theme.palette.primary.main
                },
              }}
            >
              Add story
            </Button>

            <Button
              variant="outlined"
              sx={{
                border: "none",
                width: "200px",
                marginTop: 2,
                color: "#2b256f",
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

      <div className="stories">
        {story &&
          story.map((element) => (
            <Story key={element.id} {...element} useStyles={useStyles} />
          ))}
      </div>
    </>
  );
}
