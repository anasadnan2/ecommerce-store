// scr/components/StoryIntroSection.tsx

import { Box, Button, Container, Typography } from "@mui/material";

function StoryIntroSection() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Local Video */}
          <Box
            sx={{
              flex: 1,
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: 3,
              width: "100%",
            }}
          >
            <video
              controls
              style={{ width: "100%", borderRadius: "12px" }}
              //   poster="/images/video-poster.jpg"
            >
              <source src="/videos/aboutus.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>

          {/* Text Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 2, letterSpacing: 1 }}
            >
              How Was AnasStore Founded?
            </Typography>
            <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
              AnasStore started with a vision to bring premium tech to everyone.
              From humble beginnings to thousands of happy customers, our story
              is built on trust, innovation, and passion.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#111",
                color: "#fff",
                px: 4,
                py: 1.5,
                textTransform: "uppercase",
                "&:hover": { backgroundColor: "#333" },
              }}
              href="/page/shop"
            >
              Shop Our Store
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default StoryIntroSection;
