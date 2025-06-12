// scr/components/FeaturesSection.tsx


import { Container, Typography, Box, Stack } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import GppGoodIcon from "@mui/icons-material/GppGood";

const features = [
  {
    icon: <LocalShippingIcon fontSize="large" sx={{ color: "black" }} />,
    title: "FREE DELIVERY",
    description: "Consectetur adipis elit lorem ipsum dolor sit amet.",
  },
  {
    icon: <VerifiedUserIcon fontSize="large" sx={{ color: "black" }} />,
    title: "QUALITY GUARANTEE",
    description: "Dolor sit amet orem ipsu mcons ectetur adipi elit.",
  },
  {
    icon: <LocalOfferIcon fontSize="large" sx={{ color: "black" }} />,
    title: "DAILY OFFERS",
    description: "Amet consectetur adipis elit lorem ipsum dolor sit.",
  },
  {
    icon: <GppGoodIcon fontSize="large" sx={{ color: "black" }} />,
    title: "100% SECURE PAYMENT",
    description: "Rem Lopsum dolor sit amet, consectetur adipi elit.",
  },
];

function FeaturesSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={4}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {features.map((feature, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "22%" },
              textAlign: "center",
            }}
          >
            {feature.icon}
            <Typography variant="subtitle1" sx={{ fontWeight: "550", mt: 1 }}>
              {feature.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {feature.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

export default FeaturesSection;
