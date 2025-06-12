// scr/components/Navbar.tsx

import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Menu, MenuItem } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const linkStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    margin: "0 10px",
    textDecoration: "none",
    fontSize: "18px",
    color: "black",
  };

  const activeStyle = {
    color: "#00796b",
    fontWeight: "900",
  };

  return (
    <Container maxWidth="xl">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            AnasStore
          </div>
        </NavLink>

        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          <div style={{ display: "flex" }}>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeStyle } : linkStyle
              }
            >
              Home
            </NavLink>

            {/* Pages dropdown */}
            <div
              id="pages-button"
              aria-controls={open ? "pages-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              style={{
                ...linkStyle,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              Pages
              <KeyboardArrowDownIcon style={{ fontSize: 20 }} />
            </div>

            <Menu
              id="pages-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "pages-button",
              }}
              sx={{
                "& .MuiPaper-root": {
                  borderRadius: 2,
                  mt: 1,
                  minWidth: 180,
                  boxShadow:
                    "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                  "& .MuiMenuItem-root": {
                    fontSize: 16,
                    "&:hover": {
                      backgroundColor: "#e0f2f1",
                      color: "#00796b",
                    },
                  },
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <NavLink
                  to="/page/cart"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Cart
                </NavLink>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavLink
                  to="/page/shop"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Shop
                </NavLink>
              </MenuItem>
            </Menu>
            <NavLink
              to="/about"
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeStyle } : linkStyle
              }
            >
              About
            </NavLink>
            <NavLink
              to="/blogs"
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeStyle } : linkStyle
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeStyle } : linkStyle
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Icons */}
          <div style={{ display: "flex", gap: "15px" }}>
            <NavLink to="/profile">
              <PersonIcon style={{ cursor: "pointer", color: "black" }} />
            </NavLink>
            <NavLink to="/search">
              <SearchIcon style={{ cursor: "pointer", color: "black" }} />
            </NavLink>
            <NavLink to="/cart">
              <ShoppingCartIcon style={{ cursor: "pointer", color: "black" }} />
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
