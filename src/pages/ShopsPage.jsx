import { Outlet, useNavigate } from "react-router-dom";
import { useGetUniqueShopsQuery } from "../redux/products/productApi";
import {
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { Suspense, useEffect, useState } from "react";
import { useToast } from "../hooks/useToast";

export const ShopsPage = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(false);
  const [shop, setShop] = useState("");
  const cart = useSelector((state) => state.cart.items);
  const { showToast, Toast } = useToast();

  useEffect(() => {
    if (cart?.length && cart?.length === 1) {
      setIsDisabled(cart[0].shop !== shop);
      showToast("An order can only be made from one shop", "info");
      setTimeout(
        () =>
          showToast(
            "To order from another store, please empty your shopping cart",
            "info"
          ),
        3000
      );
    }
  }, [cart, shop]);

  const handleClick = (e) => {
    const buttonName = e.target.textContent.toLowerCase();
    navigate(`goods/${buttonName}`);
    setShop(buttonName);
  };

  const { data, isLoading } = useGetUniqueShopsQuery();

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <Grid container spacing={2} sx={{ paddingTop: "70px" }}>
        <Grid
          item
          xs={3}
          sx={{ overflow: "auto", height: "calc(100vh - 80px)" }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
          >
            {data &&
              data.map((shop) => (
                <Button
                  disabled={isDisabled}
                  key={shop}
                  name={shop}
                  size="large"
                  onClick={handleClick}
                >
                  <Typography variant="h2" component="span" gutterBottom>
                    {shop}
                  </Typography>
                </Button>
              ))}
          </ButtonGroup>
        </Grid>

        <Grid item xs={9}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Grid>
        <Toast />
      </Grid>
    </>
  );
};
