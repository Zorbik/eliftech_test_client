import { Grid, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { HistoryItem } from "./HistoryItem";

export const HistoryList = ({ order }) => {
  const totalPrice = order.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const totalCount = order.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          overflow: "auto",
          height: "70hv",
        }}
      >
        <Grid item xs={12} container spacing={2}>
          {order &&
            order.map((item) => (
              <Grid item xs={6} key={item._id}>
                <HistoryItem item={item} />
              </Grid>
            ))}
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "50px",
          }}
        >
          <Typography variant="h4">Total price: {totalPrice}</Typography>
          <Typography variant="h4">Total count: {totalCount}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

HistoryList.propTypes = {
  order: PropTypes.array,
};
