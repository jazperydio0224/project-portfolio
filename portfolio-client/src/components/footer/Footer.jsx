import { Typography, Box } from "@mui/material";
import Stack from "@mui/material/Stack";
const Footer = () => {
  return (
    <footer className="footer gap-5">
      <Box sx={{ margin: "2px 15px", justifyContent: "left" }}>
        <Typography variant="h6">Email: Jazper@gmail.com</Typography>
        <Typography variant="h6">Contact no.: 0912-123-456-7890</Typography>
      </Box>
      <Box sx={{ margin: "2px 15px", justifyContent: "left" }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ color: "#fff" }}
        >
          <Typography variant="h6">Facebook</Typography>
          <Typography variant="h6">Github</Typography>
          <Typography variant="h6">LinkedIn</Typography>
        </Stack>
      </Box>
    </footer>
  );
};

export default Footer;
