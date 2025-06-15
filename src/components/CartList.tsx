import { Box, Typography, Divider } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import { useContext } from "react";
import CartContext from "../context/Cartcontext";

const CartList = () => {
  const { products, removeCart } = useContext(CartContext);

  const total = products.reduce(
    (acc, { item, count }) => acc + item.price * count,
    0
  );

  return (
    <Box sx={{ p: 4, width: "1000px", margin: "0 auto" }}>
      {products.length === 0 ? (
        <Typography variant="h6">No Item Inside The Cart</Typography>
      ) : (
        <>
          {/* Table Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ width: "40%", fontWeight: "400" }}>
              Product
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: "20%", textAlign: "center", fontWeight: "400" }}
            >
              Quantity
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: "20%", textAlign: "center", fontWeight: "400" }}
            >
              Price
            </Typography>
            <Typography
              variant="h6"
              sx={{ width: "20%", textAlign: "center" }}
            ></Typography>
          </Box>
          <Divider sx={{ my: 2 }} />

          {/* Products */}
          {products.map(({ item, count }) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                my: 2,
                p: 2,
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
              }}
            >
              {/* Product */}
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  width: "40%",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width={100}
                  style={{ objectFit: "cover", borderRadius: "6px" }}
                />
                <Typography variant="h6" noWrap>
                  {item.name}
                </Typography>
              </Box>

              {/* Quantity */}
              <Box sx={{ width: "20%", textAlign: "center" }}>
                <Typography>{count}</Typography>
              </Box>

              {/* Price */}
              <Box sx={{ width: "20%", textAlign: "center" }}>
                <Typography variant="h6" color="primary">
                  ${item.price * count}
                </Typography>
              </Box>

              {/* Remove Button */}
              <Box sx={{ width: "20%", textAlign: "center" }}>
                <button
                  onClick={() => removeCart({ item, count })}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <ClearOutlinedIcon />
                </button>
              </Box>
            </Box>
          ))}

          <Divider sx={{ my: 2 }} />

          {/* Cart Totals */}
          <Box
            sx={{
              mt: 4,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              border: "1px solid #ddd",
              borderRadius: "8px",
              width: "250px",
              ml: "auto",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              CART TOTALS
            </Typography>
            <Typography variant="h6" color="primary">
              ${total.toFixed(2)}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default CartList;
