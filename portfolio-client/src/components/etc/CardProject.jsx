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
    // <div className="card">
    //   <img src={nuliv} alt="nuliv" className="z-10" />
    //   <Typography
    //     sx={{ textAlign: "center", marginTop: "10px" }}
    //     variant="h5"
    //     className="text-[#C8FAFA] mt-5"
    //   >
    //     Project 1
    //   </Typography>
    //   <Typography variant="body1" sx={{ color: "#fff", marginTop: "10px" }}>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
    //     natus alias! Consequatur animi enim cupiditate officiis ad minima,
    //     perspiciatis quibusdam provident error quidem? Dolorem debitis porro et
    //     dicta fuga provident.
    //   </Typography>

    //   <ul className="flex flex-row text-white mt-5 justify-evenly list-none">
    //     <li>Wordpress</li>
    //     <li>CSS</li>
    //     <li>Javascript</li>
    //   </ul>

    //   <div className="flex flex-row justify-between mt-5">
    //     <button className="btn px-10 py-2">Code</button>
    //     <button className="btn px-10 py-2">Live</button>
    //   </div>
    // </div>
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <Card
        sx={{
          maxWidth: 430,
          maxHeight: 625,
          boxShadow: "1.3rem 1.3rem 1.3rem rgba(0,0,0,0.5)",
          borderRadius: "1rem",
          border: "2px soild transparent",
          backdropFilter: "blur(1rem)",
          background: "rgba(255,255,255,0.1) 0% 0% no-repeat padding-box",
          color: "#fff",
          borderTopColor: "rgba(225,225,225,0.5)",
          borderLeftColor: "rgba(225,225,225,0.5)",
          borderBottomColor: "rgba(255,255,255,0.1 )",
          borderRightColor: "rgba(255,255,255,0.1)",
          padding: "20px 30px",
          cursor: "pointer",
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
              border: "1px solid #F47D7D",
              background: "rgba(244, 125, 125, 0.5)",
              color: "#fff",
              backdropFilter: "blur(1rem)",
              ":hover": {
                background: "transparent",
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
              border: "1px solid #F47D7D",
              background: "rgba(244, 125, 125, 0.5)",
              color: "#fff",
              backdropFilter: "blur(1rem)",
              ":hover": {
                background: "transparent",
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
