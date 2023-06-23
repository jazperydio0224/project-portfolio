import { Typography, Box } from "@mui/material";
import CardProject from "../etc/CardProject";
const Projects = () => {
  return (
    <section className="section section-padding relative">
      <div className="blue-circle"></div>
      <div className="purple-circle"></div>
      <div className="yellow-circle"></div>
      <Typography variant="h3" className="text-[#C8FAFA] title">
        Projects
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }} mt={2}>
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
