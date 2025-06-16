import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Brands() {
  const linkStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    margin: "0 10px",
    textDecoration: "none",
    fontSize: "18px",
    color: "black",
    transition: "color 0.3s",
  };

  const activeStyle = {
    color: "#00796b",
    fontWeight: "900",
  };
  return (
    <div>
      <Typography variant="h6" style={{ textDecoration: "underline" }}>
        BRANDS
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <NavLink
          to="/shop/apple"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Apple
        </NavLink>
        <NavLink
          to="/shop/samsung"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Samsung
        </NavLink>
        <NavLink
          to="/shop/xiaomi"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Xiaomi
        </NavLink>
      </div>
    </div>
  );
}

export default Brands;
