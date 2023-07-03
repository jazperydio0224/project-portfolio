import { Typography, Box } from "@mui/material";
import CardProject from "../etc/CardProject";
import { delay, motion } from "framer-motion";

const onReveal = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: "-100vw" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 2 }}
      viewport={{ once: true }}
      className="section section-padding relative mt-32 mb-32"
      id="Projects"
    >
      {/* <div className="green-circle"></div>
      <div className="blue-circle"></div>
      <div className="purple-circle"></div>
      <div className="yellow-circle"></div>
      <div className="orange-circle"></div> */}
      <motion.div
        initial={{ opacity: 0, x: "-100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.2, type: "spring", bounce: 0.8 }}
      >
        <Typography variant="h3" className="text-[#C8FAFA] title">
          Projects
        </Typography>
      </motion.div>

      <Typography
        variant="body1"
        sx={{ marginY: "15px" }}
        className="text-white "
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus qui
        deleniti alias a laboriosam mollitia incidunt doloribus. Harum,
        reprehenderit quod.
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
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
    </motion.section>
  );
};

export default Projects;
