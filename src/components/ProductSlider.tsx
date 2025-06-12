// scr/components/ProductSlider.tsx

import { Typography, IconButton, Box, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductsContext";

// تعريف نوع الـ props
type ProductSliderProps = {
  iconstate?: boolean;
  deccount?: string;
};

function ProductSlider({ iconstate = false, deccount }: ProductSliderProps) {
  const { products } = useContext(ProductContext);
  const [index, setIndex] = useState(0);
  const current = products[index];

  const handleNext = () => {
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        justifyContent:
          iconstate && products.length > 1 ? "space-between" : "space-around",
        alignItems: "center",
        backgroundColor: "#f1f1f1",
        gap: 2,
        marginTop: "20px",
        borderRadius: "10px",
        height: "350px",
      }}
    >
      {iconstate && products.length > 1 && (
        <IconButton onClick={handlePrev}>
          <ArrowBackIosIcon />
        </IconButton>
      )}

      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {deccount && (
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: "100",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            -{deccount} OFF
          </Typography>
        )}
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "200",
            fontSize: "70px",
          }}
        >
          {current.name}
        </Typography>
        <Button
          variant="text"
          style={{
            width: "150px",
            color: "white",
            backgroundColor: "black",
            fontWeight: "100",
          }}
        >
          Shop Now !
        </Button>
      </div>

      <Box
        component="img"
        src={current.image}
        alt={current.name}
        sx={{
          width: 300,
          height: "auto",
          objectFit: "contain",
          mt: 1,
        }}
      />

      {iconstate && products.length > 1 && (
        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      )}
    </Box>
  );
}

export default ProductSlider;
