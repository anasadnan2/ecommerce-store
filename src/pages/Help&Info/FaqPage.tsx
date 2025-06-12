// src/pages/Help&Info/FaqPage.tsx


import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
  Box,
  Paper,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const faqItems = [
  {
    question: "How long does shipping take?",
    answer:
      "Shipping usually takes 3-7 business days depending on your location. We offer express shipping options at checkout for faster delivery.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes! We accept returns within 14 days of delivery. Products must be unused and in original packaging. Visit our Returns page for more info.",
  },
  {
    question: "How can I track my order?",
    answer:
      "After your order is shipped, you’ll receive an email with a tracking number and a link to track your shipment in real-time.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay.",
  },
  {
    question: "Do you offer a warranty?",
    answer:
      "Yes, most of our electronics come with a 1-year warranty. Please refer to the product page for specific warranty details.",
  },
];

function FaqPage() {
  return (
    <Box>
      <Navbar />

      <Box
        sx={{
          backgroundColor: "#f9f9f9",
          py: 10,
        }}
      >
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
            <Typography
              variant="h4"
              gutterBottom
              align="center"
              fontWeight="bold"
              sx={{ color: "primary.main", mb: 4 }}
            >
              Frequently Asked Questions
            </Typography>

            {faqItems.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  boxShadow: "0px 3px 10px rgba(0,0,0,0.05)",
                  "&:before": { display: "none" },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography fontWeight={600} color="text.primary">
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">{item.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default FaqPage;
