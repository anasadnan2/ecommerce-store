// src/pages/Help&Info/WarrantyPage.tsx

import { Box, Container, Typography, Paper } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function WarrantyInfo() {
  return (
    <Box>
      <Navbar />

      <Box sx={{ backgroundColor: "#f9f9f9", py: 10 }}>
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              fontWeight="bold"
              align="center"
              sx={{ color: "primary.main", mb: 4 }}
            >
              Warranty Information
            </Typography>

            <Typography variant="body1" paragraph>
              We stand behind the quality of our products. Most electronics
              purchased through our store come with a standard{" "}
              <strong>1-year warranty</strong> from the date of purchase.
            </Typography>

            <Typography variant="h6" gutterBottom fontWeight="600">
              What’s Covered:
            </Typography>
            <Typography variant="body1" paragraph>
              • Manufacturer defects in materials or workmanship
              <br />• Product malfunctions under normal usage
            </Typography>

            <Typography variant="h6" gutterBottom fontWeight="600">
              What’s Not Covered:
            </Typography>
            <Typography variant="body1" paragraph>
              • Accidental damage or misuse
              <br />
              • Normal wear and tear
              <br />• Unauthorized repairs or modifications
            </Typography>

            <Typography variant="h6" gutterBottom fontWeight="600">
              Claiming Warranty:
            </Typography>
            <Typography variant="body1">
              To initiate a warranty claim, please contact us at{" "}
              <strong>warranty@example.com</strong> with your order number and a
              description of the issue.
            </Typography>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default WarrantyInfo;
