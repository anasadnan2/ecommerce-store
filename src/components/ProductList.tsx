// scr/components/ProductList.tsx

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../context/ProductsContext";

type Product = {
  image: string;
  name: string;
  price: number;
};

function ProductList() {
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleItemClick = (product: Product) => {
    navigate("/page/item", { state: product });
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {products.map((item, index) => (
        <div
          key={index}
          onClick={() => handleItemClick(item)}
          style={{ cursor: "pointer" }}
        >
          <Card sx={{ width: 200, margin: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image={item.image}
              alt={item.name}
            />
            <CardContent
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography variant="body2">{item.name}</Typography>
              <Typography variant="h6" color="primary">
                ${item.price}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
