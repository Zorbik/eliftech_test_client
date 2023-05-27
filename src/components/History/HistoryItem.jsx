import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export const HistoryItem = ({ item }) => {
  const { picture, title, price, quantity } = item;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        height: "200px",
        gap: 10,
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
        <Typography variant="h5" color="text.secondary">
          quantity: {quantity}
        </Typography>
      </CardContent>
    </Card>
  );
};

HistoryItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    picture: PropTypes.string,
    shop: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
  }),
};
