import { CircularProgress, Grid, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { HistoryList } from "../components/History/HistoryList";
import { useGetOrdersByPhoneOrEmailQuery } from "../redux/users/userApi";

const initialState = {
  phone: "",
  email: "",
};

export const HistoryPage = () => {
  const [form, setForm] = useState(initialState);
  const [debouncedForm, setDebouncedForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setDebouncedForm(form);
    }, 1000);

    return () => clearTimeout(delay);
  }, [form]);

  const { data, isLoading } = useGetOrdersByPhoneOrEmailQuery({
    ...debouncedForm,
  });

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <Grid container spacing={2} sx={{ paddingTop: "70px" }}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Email:"
            variant="outlined"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Phone:"
            variant="outlined"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
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
