// scr/components/Footer.tsx


import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

function Footer() {
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
    <div style={{ padding: "40px 20px" }}>
      {/* topfooter */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* About Column */}
        <div style={{ flex: "1" }}>
          <Typography
            variant="h5"
            style={{ fontWeight: "600", marginBottom: "10px" }}
          >
            AnasStore
          </Typography>
          <Typography
            variant="body1"
            style={{ lineHeight: 1.5, fontSize: "12px" }}
          >
            AnasStore is your go-to destination for the latest and most trusted
            tech products. From smartphones and smartwatches to tablets and
            accessories, we bring you quality and innovation at great prices.
            Built with passion and driven by customer satisfaction, we aim to
            make your shopping experience smooth, reliable, and enjoyable.
          </Typography>
        </div>

        {/* Quick Links Column */}
        <div style={{ flex: "1" }}>
          <Typography
            variant="h5"
            style={{ fontWeight: "600", marginBottom: "10px" }}
          >
            QUICK LINKS
          </Typography>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeStyle } : linkStyle
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/page/shop"
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeStyle } : linkStyle
              }
            >
              Shop
            </NavLink>
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
        </div>
        {/* help and Info */}
        <div style={{ flex: "1" }}>
          <Typography
            variant="h5"
            style={{ fontWeight: "600", marginBottom: "10px" }}
          >
            HELP & INFO
          </Typography>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <NavLink
              to="/Help&Info/faq"
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeStyle } : linkStyle
              }
            >
              FAQ
            </NavLink>
            <NavLink
              to="/Help&Info/returns&refunds"
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeStyle } : linkStyle
              }
            >
              Returns & Refunds
            </NavLink>
            <NavLink
              to="/Help&Info/WarrantyInfo"
              style={({ isActive }) =>
                isActive ? { ...linkStyle, ...activeStyle } : linkStyle
              }
            >
              Warranty Information
            </NavLink>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div
        style={{
          borderTop: "1px solid #ddd",
          marginTop: "40px",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "14px",
          color: "#666",
        }}
      >
        © {new Date().getFullYear()} AnasStore. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
