import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Tages() {
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
        TAGS
      </Typography>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <NavLink
          to="/shop/white"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          White
        </NavLink>
        <NavLink
          to="/shop/cheap"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Cheap
        </NavLink>
        <NavLink
          to="/shop/cheap"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Mobile
        </NavLink>
        <NavLink
          to="/shop/modern"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Modern
        </NavLink>
      </div>
    </div>
  );
}

export default Tages;
