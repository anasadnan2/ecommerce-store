// scr/components/ShopOurInstaSection.tsx

import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";

type ShopOurInstaSectionProp = {
  title: string;
};

function ShopOurInstaSection({ title }: ShopOurInstaSectionProp) {
  const { products } = useContext(ProductContext);
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "50px 0",
      }}
    >
      <Typography variant="h5">{title}</Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          marginTop: "20px",
          borderRadius: "10px",
          height: "auto",
          width: "100%",
        }}
      >
        {products.slice(0, 5).map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 calc(33% - 16px)", // responsive 3 columns
              maxWidth: "200px",
            }}
          >
            <img
              src={item.image}
              alt={`product-${index}`}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default ShopOurInstaSection;
