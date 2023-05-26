import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { HistoryList } from "../components/History/HistoryList";
import { useGetOrdersByPhoneOrEmailQuery } from "../redux/users/userApi";

const initialState = {
  phone: "",
  email: "",
};

export const HistoryPage = () => {
  const [form, setForm] = useState(initialState);
  let query;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleClick = async () => {
    query = form.phone ? form.phone : form.email;
  };

  const { data, isLoading } = useGetOrdersByPhoneOrEmailQuery({ query });
  console.log("data:", data);

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <Grid container spacing={2} sx={{ paddingTop: "70px" }}>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label="Email:"
            variant="outlined"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label="Phone:"
            variant="outlined"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={2}>
          <Button onClick={handleClick}>
            <Typography variant="h4" component="span">
              Search
            </Typography>
          </Button>
        </Grid>

        <Grid item xs={12} sx={{ overflow: "auto", height: "80vh" }}>
          {data &&
            data.map(({ date, order }) => (
              <HistoryList key={date} order={order} />
            ))}
        </Grid>
      </Grid>
    </>
  );
};
