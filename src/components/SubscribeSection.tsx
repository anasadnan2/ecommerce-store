// scr/components/SubscribeSection.tsx

import { Typography, TextField, Button } from "@mui/material";
import Box from "@mui/material/Box";

function SubscribeSection() {
  return (
    <Box
      component="section"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
        padding: "50px 0",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#212121",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "white",
        }}
      >
        <Typography variant="h4">SUBSCRIBE US NOW</Typography>
        <Typography
          variant="body2"
          style={{ fontWeight: "100", color: "#9e9e9e" }}
        >
          Get latest news, updates and deals directly mailed to your inbox
        </Typography>
      </div>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <TextField
          placeholder="Your email address"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "white",
            width: "300px",
          }}
        />
        <Button
          variant="contained"
          sx={{
            height: "40px",
            borderRadius: 0,
            backgroundColor: "rgb(0, 174, 239)",
          }}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  );
}

export default SubscribeSection;
