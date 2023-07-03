import { Typography, Box, Grid, Paper, Container } from "@mui/material";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import avatar from "../../assets/avatar.jpg";
import AboutCard from "../etc/AboutCard";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "transparent",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#fff",
}));
const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: "-100vw" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 2 }}
      viewport={{ once: true, amount: 0 }}
      className=" section-padding "
      id="About"
    >
      <Typography variant="h3" className="text-[#C8FAFA] title">
        About Me
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
      <Box sx={{ color: "#fff", marginTop: 20 }}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Item
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50%",
                outline: "none",
                width: "400px",
                maxHeight: "400px",
                background: "transparent",
              }}
            >
              <Box sx={{ border: "none", outline: "none" }}>
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-[400px] h-[400px] rounded-full object-cover object-top border-none outline-none"
                />
              </Box>
            </Item>
          </Grid>
          <Grid item md={6}>
            <Item
              className="parallax-effect-glare-scale"
              sx={{
                padding: "20px 30px",
                width: "100%",
                maxHeight: "100%",
                boxShadow: "1.3rem 1.3rem 1.3rem rgba(0,0,0,0.5)",
                borderRadius: "1rem",

                backdropFilter: "blur(1rem)",
                background: "rgba(255,255,255,0.2) 0% 0% no-repeat padding-box",
                color: "#fff",
                borderTopColor: "rgba(225,225,225,0.5)",
                borderLeftColor: "rgba(225,225,225,0.5)",
                borderBottomColor: "rgba(255,255,255,0.1 )",
                borderRightColor: "rgba(255,255,255,0.1)",

                cursor: "pointer",
                overflow: "hidden",
              }}
            >
              <Typography variant="h3">Jazper Ydio</Typography>
              <Typography variant="body1" textAlign="left" mt={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                odio ratione ipsum maxime doloremque consequuntur eius? Commodi
                voluptatem, sequi ipsum eos inventore ipsam quasi mollitia
                temporibus error culpa deserunt beatae hic obcaecati labore
                illum dolore nostrum odio, dolor doloribus eum itaque delectus
                qui velit maiores. Quis minus harum ipsum molestias!
              </Typography>
              <Typography variant="body1" textAlign="left" mt={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                beatae excepturi rem, alias debitis natus incidunt, accusantium
                repellat eum non laudantium quaerat recusandae quae animi unde
                esse! Qui, nostrum amet!
              </Typography>
            </Item>
          </Grid>
        </Grid>
        <Typography variant="h3" sx={{ color: "#C8FAFA", marginTop: 10 }}>
          Work Experiences
        </Typography>
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <AboutCard />
          <AboutCard />
          <AboutCard />
        </Container>
      </Box>
    </motion.section>
  );
};

export default About;
