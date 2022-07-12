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

export default function Event() {
  return (
    <Card sx={{ maxWidth: 305, position: "relative" }}>
      <CardMedia
        component="img"
        height="250"
        image="https://images.unsplash.com/photo-1633612833438-eef0fe314c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt=""
      />
      <CardContent sx={{ height: 150 }}>
        <DeleteIcon sx={{ position: "absolute", top: 5, right: 5 }} />
        <EditIcon sx={{ position: "absolute", top: 5, right: 35 }} />
        <Typography gutterBottom variant="h5" component="div">
          Event name
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Event description
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Place
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Attend
          <AddIcon />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}
