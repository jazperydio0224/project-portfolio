import nuliv from "../../assets/nuliv.png";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tilt from "react-parallax-tilt";

const CardProject = ({ title, description }) => {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={900}
      glareEnable={true}
      glareMaxOpacity={0.65}
      scale={1.02}
    >
      <Card
        sx={{
          maxWidth: 430,
          maxHeight: 625,
          boxShadow: "1.3rem 1.3rem 1.3rem rgba(0,0,0,0.5)",
          borderRadius: "1rem",

          backdropFilter: "blur(1rem)",
          background: "rgba(255,255,255,0.1) 0% 0% no-repeat padding-box",
          color: "#fff",
          borderTopColor: "rgba(225,225,225,0.5)",
          borderLeftColor: "rgba(225,225,225,0.5)",
          borderBottomColor: "rgba(255,255,255,0.1 )",
          borderRightColor: "rgba(255,255,255,0.1)",
          padding: "20px 30px",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        <CardMedia
          sx={{ height: 250, borderRadius: "10px" }}
          image={nuliv}
          title="green iguana"
        />
        <CardContent>
          <Typography
            sx={{ textAlign: "center" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "#fff" }}>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            sx={{
              background: "rgba(244, 125, 125, 0.5)",
              color: "#fff",
              backdropFilter: "blur(1rem)",
              outline: "none",
              ":hover": {
                background: "transparent",
                border: "1px solid #F47D7D",
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "1px",
                transition: "0.3s ease-in all",
              },
            }}
            size="small"
          >
            Code
          </Button>
          <Button
            sx={{
              background: "rgba(244, 125, 125, 0.5)",
              color: "#fff",
              backdropFilter: "blur(1rem)",
              outline: "none",
              ":hover": {
                background: "transparent",
                border: "1px solid #F47D7D",
                color: "#fff",
                fontWeight: 700,
                letterSpacing: "1px",
                transition: "0.3s ease-in all",
              },
            }}
            size="small"
          >
            Live
          </Button>
        </CardActions>
      </Card>
    </Tilt>
  );
};

export default CardProject;
