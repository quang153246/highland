import { Box } from "@mui/material";
import React from "react";
import sub_baner1 from "../../assets/images/sub_baner1.jpg";
import sub_baner2 from "../../assets/images/sub_baner2.jpg";
import sub_baner3 from "../../assets/images/sub_baner3.jpg";
import Mainbutton from "../button/Mainbutton";
const SubBaner = (props) => {
  return (
    <Box sx={{ position: "relative" }}>
      <img width={"100%"} height={"auto"} src={props.imgUrl} />
      <Box
        sx={{ width: "50%", position: "absolute", bottom: "15%", right: 0, textAlign:"center", color:"rgb(243, 189, 122)" }}
      >
        <Mainbutton label="Discover more" />
      </Box>
    </Box>
  );
};

export default SubBaner;
