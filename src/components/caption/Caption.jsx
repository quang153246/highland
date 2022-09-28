import React from "react";
import { Box, Typography } from "@mui/material";
import Mainbutton from "../button/Mainbutton";
const Caption = (props) => {
  return (
    <Box
      sx={{
        display:"flex",
        flexDirection: props.isReverse ? "row-reverse" : "row",
        padding:"0 100px",
        width: "100%",
        backgroundImage:`url(${props.backgroundUrl})`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
        color: props.color,
      }}
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: props.isReverse ? "end" : "",
          textAlign: props.isReverse ? "right" : "left",
          flexDirection: "column",
          padding:"40px 0",
          color: "inherit"
        }}
      >
        <Typography
          variant="h2"
          sx={{ color: "inherit", fontWeight: 500, mb: "20px" }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="p"
          sx={{ mb: "40px", fontSize: "18px", fontWeight: "bold" }}
        >
          {props.description}
        </Typography>
        <Mainbutton label= {props.textButton} color="inherit" background="#b22830" />
      </Box>
      <Box
        sx={{
            width:"50%"
        }}
      >
        <img style={{float:props.isReverse ? "left" : "right", maxWidth:"550px", width:"100%"}} src= {props.imgUrl}/>
      </Box>
    </Box>
  );
};

export default Caption;
