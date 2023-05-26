import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/cart/cartSlice";

export const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQauntity] = useState(1);

  const { picture, title, price } = item;

  const handleChange = (e) => {
    if (e.target.value > 0) {
      setQauntity(Number(e.target.value));
    }
  };

  return (
    <Card sx={{ width: 345 }}>
      <CardMedia component="img" alt={title} height="140" image={picture} />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h4" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Button onClick={() => dispatch(addToCart({ ...item, quantity }))}>
          To cart
        </Button>
        <TextField
          label="Quantity:"
          variant="outlined"
          type="number"
          value={quantity}
          sx={{ width: "100px" }}
          onChange={handleChange}
        />
      </CardActions>
    </Card>
  );
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    picture: PropTypes.string,
    shop: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
};
