import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Product() {
  return (
    <Card sx={{ maxWidth: 205, position: "relative" }}>
      <CardMedia
        component="img"
        height="200"
        image="https://images.unsplash.com/photo-1607773709367-06b7a91f7e4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt=""
      />
      <CardContent sx={{ height: 90 }}>
        <DeleteIcon sx={{ position: "absolute", top: 5, right: 5 }} />
        <EditIcon sx={{ position: "absolute", top: 5, right: 35 }} />
        <Typography gutterBottom variant="h5" component="div">
          Product Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Product description
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Seller
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <LocalGroceryStoreIcon />
        </Button>
        <Button size="small">
          <StarBorderIcon />
        </Button>
      </CardActions>
    </Card>
  );
}
