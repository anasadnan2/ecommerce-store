import { Typography, Link, Box } from "@mui/material";

function SocialLinks() {
  return (
    <Box>
      <Typography variant="h6" style={{ textDecoration: "underline" }}>
        SOCIAL LINKS
      </Typography>
      <Box component="ul" sx={{ listStyle: "none", p: 0, fontWeight: "100" }}>
        {[
          { name: "Facebook", url: "https://facebook.com" },
          { name: "Twitter", url: "https://twitter.com" },
          { name: "Instagram", url: "https://instagram.com" },
          { name: "LinkedIn", url: "https://linkedin.com" },
        ].map(({ name, url }) => (
          <Box component="li" key={name} sx={{ mb: 1 }}>
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                color: "black",
                "&:hover": {
                  color: "red",
                },
              }}
            >
              {name}
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default SocialLinks;
