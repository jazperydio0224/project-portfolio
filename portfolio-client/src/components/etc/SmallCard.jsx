import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import nuliv from "../../assets/nuliv.png";
import { Box, Stack } from "@mui/material";

const SmallCard = () => {
  return (
    // <Card
    //   sx={{
    //     position: "relative",
    //     width: "350px",
    //     height: "190px",
    //     background: "#fff",
    //     borderRadius: "20px",
    //     boxShadow: "0 35px 85px rgba(0,0,0,0.15)",
    //     transition: "0.5s",
    //     ":hover": {
    //       height: "450px",
    //     },
    //   }}
    // >
    //   <Box
    //     sx={{
    //       position: "absolute",
    //       top: "-50px",
    //       left: "50%",
    //       transform: "translateX(-50%)",
    //       width: "150px",
    //       height: "150px",
    //       background: "blue",
    //       borderRadius: "20px",
    //       boxShadow: "0 11px 50px rgba(0,0,0,0.35)",
    //     }}
    //   >
    //     <img
    //       className="absolute top-0 left-0 w-full h-full object-cover z-50"
    //       src={nuliv}
    //       alt="nuliv"
    //     />
    //   </Box>
    //   {/* <div className="imgBox">
    //     <img
    //       className="absolute top-0 left-0 w-full h-full object-cover"
    //       src={nuliv}
    //       alt="nuliv"
    //     />
    //   </div> */}
    //   <CardContent>
    //     <Typography
    //       sx={{ textAlign: "center" }}
    //       gutterBottom
    //       variant="h5"
    //       component="div"
    //     >
    //       hello
    //     </Typography>
    //     <Typography variant="body2" sx={{ color: "#000" }}>
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
    //       natus?
    //     </Typography>
    //   </CardContent>
    // </Card>

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
        <Stack direction="row" gap={2}>
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SmallCard;
