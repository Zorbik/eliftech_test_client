import { useParams } from "react-router-dom";
import { useGetShopProductsQuery } from "../../redux/products/productApi";
import { CircularProgress, Container } from "@mui/material";
import { ProductItem } from "./ProductItem";

export const GoodsList = () => {
  const { shop } = useParams();
  const { data, isLoading } = useGetShopProductsQuery({ shop });

  if (isLoading) return <CircularProgress />;

  return (
    <>
      <Container
        sx={{
          display: "flex",
          gap: "50px",
          flexWrap: "wrap",
          overflow: "auto",
          height: "calc(100vh - 80px)",
        }}
      >
        {data &&
          data.goods.map((item) => <ProductItem key={item._id} item={item} />)}
      </Container>
    </>
  );
};
