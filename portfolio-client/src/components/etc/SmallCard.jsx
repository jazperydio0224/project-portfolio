import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import nuliv from "../../assets/nuliv.png";
import { Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const SmallCard = () => {
  return (
    <Card
      sx={{
        width: "320px",
        height: "320px",
        borderRadius: "20px",
        overflow: "hidden",
        border: "2px solid #fff",
        position: "relative",
      }}
      className="card"
    >
      <CardMedia
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "15px",
          objectFit: "cover",
        }}
        image={nuliv}
        title="green iguana"
      />
      <CardContent
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0%",
          right: "-100%",
          background: "rgba(255,255,255,0.01)",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
          color: "#333",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transition: "2s",
          padding: "5px",
        }}
        className="card-body"
      >
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          HTML
        </Typography>
        <Typography variant="body1" sx={{ padding: "15px", fontWeight: 500 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, et
          voluptas. Facere vero, facilis perspiciatis enim dolorem maxime
          obcaecati praesentium?
        </Typography>
        <Typography variant="small">rating</Typography>
        <Stack direction="row" gap={1}>
          <span>
            <StarIcon sx={{ fontSize: "30px", color: "#FDB813" }} />
          </span>
          <span>
            {" "}
            <StarIcon sx={{ fontSize: "30px", color: "#FDB813" }} />
          </span>
          <span>
            {" "}
            <StarIcon sx={{ fontSize: "30px", color: "#FDB813" }} />
          </span>
          <span>
            {" "}
            <StarIcon sx={{ fontSize: "30px", color: "#FDB813" }} />
          </span>
          <span>
            {" "}
            <StarIcon sx={{ fontSize: "30px", color: "#FDB813" }} />
          </span>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SmallCard;
