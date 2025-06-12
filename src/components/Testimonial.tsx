// scr/components/Testimonial.tsx

import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

type TestimonialProps = {
  text: string;
  author: string;
  rating?: number;
};

function Testimonial({ text, author, rating = 5 }: TestimonialProps) {
  return (
    <div
      style={{
        position: "relative",
        textAlign: "center",
        padding: "60px 20px",
        maxWidth: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "100px auto 0",
      }}
    >
      <span
        style={{
          fontSize: "120px",
          color: "#EAEAEA",
          position: "absolute",
          top: "-20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "serif",
          zIndex: 0,
          userSelect: "none",
          lineHeight: "0.5",
        }}
      >
        &rdquo;
      </span>

      {/* النص */}
      <Typography
        variant="body1"
        style={{
          position: "relative",
          zIndex: 1,
          fontSize: "20px",
          lineHeight: 1.8,
          maxWidth: "90%",
        }}
      >
        {text}
      </Typography>

      {/* النجوم */}
      <div style={{ marginTop: "25px" }}>
        {Array.from({ length: rating }).map((_, i) => (
          <StarIcon key={i} style={{ color: "#00AEEF", fontSize: "20px" }} />
        ))}
      </div>

      {/* الاسم */}
      <Typography
        variant="subtitle2"
        style={{
          marginTop: "8px",
          fontWeight: "bold",
          color: "#666",
          letterSpacing: "1px",
          fontSize: "12px",
        }}
      >
        {author.toUpperCase()}
      </Typography>
    </div>
  );
}

export default Testimonial;
