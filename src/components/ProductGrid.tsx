// scr/components/ProductGrid.tsx

import { Typography, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useContext, useRef } from "react";
import { ProductContext } from "../context/ProductsContext";

type ProductGridProp = {
  title: string;
};

function ProductGrid({ title }: ProductGridProp) {
  const { products } = useContext(ProductContext);

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        padding: "20px 0",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        style={{ marginBottom: "10px", paddingLeft: "10px" }}
      >
        {title}
      </Typography>

      {/* Left Arrow */}
      <IconButton
        onClick={scrollLeft}
        style={{
          position: "absolute",
          top: "50%",
          left: "5px",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <ChevronLeft />
      </IconButton>

      {/* Scrollable Products Container */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          gap: "15px",
          overflowX: "auto",
          scrollBehavior: "smooth",
          padding: "10px 40px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
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
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontWeight: item.price ? 500 : 100,
                  fontSize: item.price ? "inherit" : "12px",
                }}
              >
                {item.name}
              </span>
              {item.price && (
                <span style={{ color: "#1976d2", fontWeight: 600 }}>
                  ${item.price}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <IconButton
        onClick={scrollRight}
        style={{
          position: "absolute",
          top: "50%",
          right: "5px",
          transform: "translateY(-50%)",
          zIndex: 2,
          background: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <ChevronRight />
      </IconButton>
    </div>
  );
}

export default ProductGrid;
