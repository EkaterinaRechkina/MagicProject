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
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";
import { Popover } from "@mui/material";
import { useState } from "react";

export default function Event({
  id,
  title,
  description,
  place,
  img,
  price,
  date,
  people,
}) {
  // delEventHandler();

  return (
    <>

      <Card sx={{ maxWidth: 305, position: "relative" }}>
        <CardMedia component="img" height="250" image={img} alt="" />
        <CardContent sx={{ height: 150 }}>
          <DeleteIcon sx={{ position: "absolute", top: 5, right: 5 }} />
          <EditIcon sx={{ position: "absolute", top: 5, right: 35 }} />
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Place: {place}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            When: {date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Ticket: $ {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Participants: {people}
            <br />
            <AddIcon />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
        </CardActions>
      </Card>
    </>
  );
}
