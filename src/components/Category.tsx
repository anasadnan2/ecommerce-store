import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Categories() {
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
        CATEGORIES
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <NavLink
          to="/shop/all"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          All
        </NavLink>
        <NavLink
          to="/shop/phone"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Phone
        </NavLink>
        <NavLink
          to="/shop/tablets"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Tablets
        </NavLink>
        <NavLink
          to="/shop/watches"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Watches
        </NavLink>
      </div>
    </div>
  );
}

export default Categories;
