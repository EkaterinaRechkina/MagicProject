import React from 'react';
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function Product({ author, title, description, img, price }) {
    return (
        <Card sx={{ maxWidth: 205, position: "relative", margin: 5}}>
            <CardMedia component="img" height="200" image={img} alt=""/>

            <CardContent sx={{ height: 90 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Price: {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Author: {author}
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

export default Product;

