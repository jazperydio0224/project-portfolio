import { Typography, Box } from "@mui/material";
import SmallCard from "../etc/SmallCard";
const Technologies = () => {
  return (
    <section className="section section-padding mt-20" id="Technologies">
      <Typography variant="h3" className="text-[#C8FAFA] title">
        Technologies
      </Typography>
      <Typography
        sx={{ marginY: "15px" }}
        variant="body1"
        className="text-white mt-10"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus qui
        deleniti alias a laboriosam mollitia incidunt doloribus. Harum,
        reprehenderit quod.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }} mt={20}>
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </Box>
    </section>
  );
};

export default Technologies;
