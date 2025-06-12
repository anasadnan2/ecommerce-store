// scr/components/ListSerach.tsx

import { Button, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";

// لازم اعمل لكل اشس هان page

function ListSerach() {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          label="Search"
          variant="outlined"
          sx={{
            backgroundColor: "white",
            "& .MuiOutlinedInput-root": {
              borderRadius: "0px",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            height: "56px",
            minWidth: "56px",
            borderRadius: "0px",
            backgroundColor: "black",
            "&:hover": {
              backgroundColor: "#333",
            },
          }}
        >
          <SearchIcon />
        </Button>
      </div>
      {/* Filters */}
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        {/* CATEGORIES */}
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
        {/* -----CATEGORIES---- */}
        {/* tages */}
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
        {/* --------tages----------- */}
        {/* brands */}
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
        {/* --------brands -------*/}
      </div>
      {/* --------Filters -------*/}
    </div>
  );
}

export default ListSerach;
