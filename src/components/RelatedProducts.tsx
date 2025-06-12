// scr/components/RelatedProducts.tsx

import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../context/ProductsContext";

function RelatedProducts() {
  const { products } = useContext(ProductContext);
  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" style={{ padding: "10px" }}>
        RELATED PRODUCTS
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          overflowX: "auto",
          padding: "10px",
        }}
      >
        {products.map((item, index) => (
          <div
            key={index}
            style={{
              flex: "0 0 auto",
              display: "flex",
              flexDirection: "column",
              width: "250px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
            />
            <div
              style={{
                padding: "16px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <span
                style={{
                  fontWeight: 500,
                  fontSize: "1rem",
                  paddingRight: "8px",
                }}
              >
                {item.name}
              </span>
              {item.price && (
                <span style={{ color: "#1976d2", fontWeight: 600 }}>
                  ${item.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );
}

export default RelatedProducts;
