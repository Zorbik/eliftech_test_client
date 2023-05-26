import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const data = useSelector((state) => state.cart.items);

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
        {data && data.map((item) => <CartItem key={item._id} item={item} />)}
      </Container>
    </>
  );
};
