import { Typography, Box, Grid, Paper, Container } from "@mui/material";
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
    <section className="section section-padding mt-20 mb-20">
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
              }}
            >
              <Box>
                <img
                  src={avatar}
                  alt="avatar"
                  className="w-[400px] h-[400px] rounded-full object-cover object-top"
                />
              </Box>
            </Item>
          </Grid>
          <Grid item md={6}>
            <Item sx={{ padding: "10px 20px" }}>
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
      </Box>
      {/* <Container >
        <AboutCard />
      </Container> */}
    </section>
  );
};

export default About;
