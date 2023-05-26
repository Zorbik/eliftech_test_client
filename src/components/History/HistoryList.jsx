import { Container } from "@mui/material";
import PropTypes from "prop-types";
import { HistoryItem } from "./HistoryItem";

export const HistoryList = ({ order }) => {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          height: "70hv",
        }}
      >
        {order &&
          order.map((item) => <HistoryItem key={item._id} item={item} />)}
      </Container>
    </>
  );
};

HistoryList.propTypes = {
  order: PropTypes.array,
};
