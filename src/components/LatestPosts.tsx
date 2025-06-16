import { Typography, Box } from "@mui/material";
import photo5 from "../assets/photo5.webp";

function LatestPosts() {
  return (
    <div>
      <Box>
        <Typography variant="h6" style={{ textDecoration: "underline" }}>
          LATEST POST
        </Typography>

        <Box>
          {[
            { image: photo5, text: "TOP 10 SMALL CAMERAS IN THE WORLD" },
            { image: photo5, text: "TECHNOLOGY HACKS YOU" },
            { image: photo5, text: "GET SOME COOL PRODUCT" },
          ].map(({ image, text }, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", mb: 2 }}
            >
              <img
                src={image}
                alt={text}
                width={50}
                style={{ marginRight: "10px" ,borderRadius:"5px"}}
              />
              <Typography
                variant="body1"
                style={{ fontWeight: "100", fontSize: "14px" }}
              >
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default LatestPosts;
