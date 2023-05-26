import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../../redux/cart/cartSlice";

export const CartItem = ({ item }) => {
  const { picture, title, price, quantity } = item;

  const dispatch = useDispatch();
  const [amount, setAmount] = useState(Number(quantity));

  const handleChange = (e) => {
    if (e.target.value > 0) {
      const value = Number(e.target.value);
      setAmount(value);
      dispatch(addToCart({ ...item, quantity: value }));
    }
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        height: "200px",
        marginY: "50px",
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        image={picture}
        sx={{
          width: "auto",
          maxHeight: "100%",
          objectFit: "contain",
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h5" color="text.secondary">
          price: {price}
        </Typography>
        <TextField
          label="Quantity:"
          variant="outlined"
          type="number"
          value={amount}
          sx={{ width: "100px" }}
          onChange={handleChange}
        />
      </CardContent>
    </Card>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    picture: PropTypes.string,
    shop: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }),
};
