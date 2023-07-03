import { Box, Typography } from "@mui/material";
const AboutCard = () => {
  return (
    <div>
      <Box
        sx={{
          width: 350,
          height: 150,
          borderRadius: "20px",
          color: "#fff",
          padding: "15px 10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          outline: "none",
          boxShadow: "1.3rem 1.3rem 1.3rem rgba(0,0,0,0.5)",

          backdropFilter: "blur(1rem)",
          background: "rgba(255,255,255,0.2) 0% 0% no-repeat padding-box",

          borderTopColor: "rgba(225,225,225,0.5)",
          borderLeftColor: "rgba(225,225,225,0.5)",
          borderBottomColor: "rgba(255,255,255,0.1 )",
          borderRightColor: "rgba(255,255,255,0.1)",
        }}
      >
        <Typography variant="h4" sx={{ fontSize: "20px", marginBottom: "5px" }}>
          David and Golyat Management Inc.
        </Typography>
        <Typography variant="h4" sx={{ fontSize: "18px", marginBottom: "5px" }}>
          Software Engineer
        </Typography>
        <Typography variant="h4" sx={{ fontSize: "16px" }}>
          2022-present
        </Typography>
      </Box>
    </div>
  );
};

export default AboutCard;
