// scr/components/ItemDescription.tsx

import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../context/Cartcontext";
type ItemDescriptionPro = {
  product: {
    id: number;
    name: string;
    image: string;
    price: number;
    description: string;
    star: number;
    quantity: number;
    colors: string[];
  };
};

// that needed rework

function ItemDescription({ product }: ItemDescriptionPro) {
  const [count, setCount] = useState(0);

  const { addCart } = useContext(CartContext);

  const handleIncrement = () => {
    if (count < product.quantity) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleaddcart = () => {
    addCart({ item: product, count });
  };

  return (
    <Box
      component="section"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        padding: "50px 0",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {/* image */}
      <div
        style={{
          width: "50%",
          //   backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            height: "400px",
            objectFit: "cover",
          }}
        />
      </div>
      {/* --------image--------- */}

      {/* details */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "50%",
          //   backgroundColor: "blue",
          padding: "20px",
        }}
      >
        {/* name product */}
        <Typography variant="h3">{product.name}</Typography>
        {/*--------name product------- */}
        {/* rating */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <StarIcon sx={{ color: "#fbc02d" }} />
          <span>{product.star}</span>
        </div>
        {/* --------rating--------*/}
        {/* price */}
        <Typography variant="h3" sx={{ color: "#64b5f6" }}>
          $ {product.price}
        </Typography>
        {/* ---------price-------- */}
        {/* description */}
        <Typography variant="body2" style={{ fontWeight: "100" }}>
          {product.description}{" "}
        </Typography>
        {/* -------description-------- */}
        {/* color  */}
        <div>
          <Typography variant="h5" style={{ textDecoration: "underline" }}>
            COLORS
          </Typography>
          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
            sx={{
              "& .MuiButton-root": {
                border: "none", // يلغي حدود الأزرار
                boxShadow: "none", // يلغي الظلال
                margin: 0, // يلغي الهوامش
                padding: "8px 16px",
                color: "black",
              },
              gap: 0, // يلغي الفجوة بين الأزرار
            }}
          >
            <Button>Orange</Button>
            <Button>Green</Button>
            <Button>Black</Button>
          </ButtonGroup>
        </div>
        {/*----- color ----- */}
        {/* size */}
        <div>
          <Typography variant="h5" style={{ textDecoration: "underline" }}>
            SIZE
          </Typography>
          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
            sx={{
              "& .MuiButton-root": {
                border: "none",
                boxShadow: "none",
                margin: 0,
                padding: "8px 16px",
                color: "black",
              },
              gap: 0,
            }}
          >
            <Button>XL</Button>
            <Button>L</Button>
            <Button>M</Button>
            <Button>S</Button>
          </ButtonGroup>
        </div>
        {/* -----size-----*/}
        {/* count in stock */}
        <div style={{ fontSize: "18px", fontWeight: "700", color: "darkblue" }}>
          {product.quantity} in Stack
        </div>
        {/* -------count in stock------- */}
        {/* added to the cart */}
        <div>
          <ButtonGroup
            sx={{
              display: "inline-flex",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              borderRadius: "8px",
              height: "40px",
            }}
          >
            <Button
              onClick={handleIncrement}
              variant="contained"
              sx={{
                backgroundColor: "#64b5f6",
                color: "white",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#42a5f5" },
                px: 2,
                width: "50px",
              }}
            >
              +
            </Button>

            <Button
              disabled
              sx={{
                width: "80px",
                backgroundColor: "#f5f5f5",
                color: "#333",
                fontWeight: "bold",
                cursor: "default",
                pointerEvents: "none",
                "&.Mui-disabled": {
                  opacity: 1,
                },
              }}
            >
              {count}
            </Button>
            <Button
              onClick={handleDecrement}
              variant="outlined"
              sx={{
                color: "#666",
                borderColor: "#ccc",
                fontWeight: "bold",
                width: "50px",
                backgroundColor: "white",
                "&:hover": {
                  backgroundColor: "#f9f9f9",
                  borderColor: "#bbb",
                },
                px: 2,
              }}
            >
              -
            </Button>
          </ButtonGroup>
        </div>
        {/* -----added to the cart---- */}

        {/* buy and add cart */}
        <div>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}
          >
            <Button
              component={NavLink}
              to="/page/buy"
              variant="contained"
              sx={{
                bgcolor: "#64b5f6",
                px: 4,
                color: "white",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#42a5f5" },
              }}
            >
              BUY NOW
            </Button>
            <Button
              onClick={handleaddcart}
              variant="contained"
              sx={{
                bgcolor: "black",
                px: 4,
                color: "white",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#222" },
              }}
            >
              ADD TO CART
            </Button>
          </Box>
        </div>
        {/* -------buy and add cart------- */}
      </div>
      {/* --------details------- */}
    </Box>
  );
}

export default ItemDescription;
