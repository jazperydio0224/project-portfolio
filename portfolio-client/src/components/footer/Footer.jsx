import { Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="footer">
      <Box
        sx={{
          margin: "2px auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" textAlign="center">
          Email: Jazper@gmail.com
        </Typography>
        <Typography variant="h6" textAlign="center">
          Contact no.: 0912-123-456-7890
        </Typography>
      </Box>
      <Box
        sx={{
          margin: "2px 15px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "left",
        }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ color: "#fff" }}
        >
          <Typography variant="h6">
            <GitHubIcon sx={{ fontSize: "50px" }} />
          </Typography>
          <Typography variant="h6">
            <LinkedInIcon sx={{ fontSize: "50px" }} />
          </Typography>
          <Typography variant="h6">
            <FacebookIcon sx={{ fontSize: "50px" }} />
          </Typography>
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
