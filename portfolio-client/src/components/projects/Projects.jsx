import { Typography, Box } from "@mui/material";
import CardProject from "../etc/CardProject";
const Projects = () => {
  return (
    <section className="section section-padding relative mt-20" id="Projects">
      <div className="blue-circle"></div>
      <div className="purple-circle"></div>
      <div className="yellow-circle"></div>
      <Typography variant="h3" className="text-[#C8FAFA] title">
        Projects
      </Typography>
      <Typography
        variant="body1"
        sx={{ marginY: "15px" }}
        className="text-white "
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus qui
        deleniti alias a laboriosam mollitia incidunt doloribus. Harum,
        reprehenderit quod.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }} mt={10}>
        <CardProject
          title="Project 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, officia laboriosam tempore optio iste facilis error praesentium deserunt placeat quo!"
        />
        <CardProject
          title="Project 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, officia laboriosam tempore optio iste facilis error praesentium deserunt placeat quo!"
        />
        <CardProject
          title="Project 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, officia laboriosam tempore optio iste facilis error praesentium deserunt placeat quo!"
        />
      </Box>
    </section>
  );
};

export default Projects;
