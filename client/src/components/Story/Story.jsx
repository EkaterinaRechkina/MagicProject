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

export default function Story() {
  return (
    <Card sx={{ maxWidth: 305, position: "relative" }}>
      <CardMedia
        component="img"
        height="350"
        image="https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3ODc5MDg3NTExMzE1Nzg1/witches-ride.jpg"
        alt=""
      />
      <CardContent>
        <DeleteIcon sx={{ position: "absolute", top: 5, right: 5 }} />
        <EditIcon sx={{ position: "absolute", top: 5, right: 35 }} />
        <Typography gutterBottom variant="h5" component="div">
          Story name
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Story description
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"></Button>
      </CardActions>
    </Card>
  );
}
