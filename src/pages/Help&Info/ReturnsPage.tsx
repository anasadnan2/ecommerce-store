// src/pages/Help&Info/ReturnsPages.tsx


import { Box, Container, Typography, Paper } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function ReturnsAndRefunds() {
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
              Returns & Refunds
            </Typography>

            <Typography variant="body1" paragraph>
              We want you to be fully satisfied with your purchase. If for any
              reason you are not completely happy, you can return your product
              within <strong>14 days</strong> of delivery.
            </Typography>

            <Typography variant="h6" gutterBottom fontWeight="600">
              Return Conditions:
            </Typography>
            <Typography variant="body1" paragraph>
              • Items must be unused and in original packaging.
              <br />
              • A receipt or proof of purchase is required.
              <br />• Customized or clearance items are non-returnable.
            </Typography>

            <Typography variant="h6" gutterBottom fontWeight="600">
              Refund Process:
            </Typography>
            <Typography variant="body1" paragraph>
              Once we receive and inspect your return, you’ll get an email
              notification. If approved, your refund will be processed within{" "}
              <strong>5-7 business days</strong> to your original payment
              method.
            </Typography>

            <Typography variant="h6" gutterBottom fontWeight="600">
              Need Help?
            </Typography>
            <Typography variant="body1">
              Contact our support team at <strong>support@example.com</strong>{" "}
              for any return or refund inquiries.
            </Typography>
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default ReturnsAndRefunds;
