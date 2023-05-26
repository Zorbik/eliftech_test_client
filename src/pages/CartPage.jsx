import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CartList } from "../components/Cart/CartList";
import { useDispatch, useSelector } from "react-redux";
import { useCreateOrUpdateUserMutation } from "../redux/users/userApi";
import { clearCart } from "../redux/cart/cartSlice";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

export const CartPage = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const data = useSelector((state) => state.cart.items);
  const [orderDone, setOrderDone] = useState(false);
  const [makeOrder] = useCreateOrUpdateUserMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await makeOrder({ ...form, order: data });
    } catch (error) {
      console.log("error:", error);
    }
    setOrderDone(true);
    dispatch(clearCart());
  };

  const totalPrice = data.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {orderDone ? (
        <Typography variant="h2" textAlign="center">
          Thanks for your order
        </Typography>
      ) : (
        <>
          <Grid container spacing={2} sx={{ paddingTop: "70px" }}>
            <Grid item xs={5}>
              <TextField
                sx={{ marginY: "20px" }}
                fullWidth
                required
                label="Name:"
                variant="outlined"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <TextField
                sx={{ marginY: "20px" }}
                fullWidth
                required
                label="Email:"
                variant="outlined"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <TextField
                sx={{ marginY: "20px" }}
                fullWidth
                required
                label="Phone:"
                variant="outlined"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
              <TextField
                sx={{ marginY: "20px" }}
                fullWidth
                required
                label="Address:"
                variant="outlined"
                name="address"
                value={form.address}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={7} sx={{ overflow: "auto", height: "70vh" }}>
              <CartList />
            </Grid>
          </Grid>

          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "150px",
              justifyContent: "end",
              marginTop: 5,
            }}
          >
            <Button onClick={() => dispatch(clearCart())}>
              <Typography variant="h5" component="span">
                Clear cart
              </Typography>
            </Button>
            <Typography variant="h4">Total price: {totalPrice}</Typography>
            <Button onClick={handleClick}>
              <Typography variant="h5" component="span">
                Submit
              </Typography>
            </Button>
          </Container>
        </>
      )}
    </>
  );
};
