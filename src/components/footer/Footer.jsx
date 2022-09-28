import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Copyright from "./CopyRight";
import EmailIcon from "@mui/icons-material/Email";
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import theme from "../../theme";
export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        p: "20px 0",
        borderTop: "2px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Box>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <YouTubeIcon />
        </IconButton>
      </Box>
      <Box>
        <Copyright />
      </Box>
      <Box sx={{display:"flex"}}>
        <DriveFileRenameOutlineIcon fontSize="small" sx={{mr:"5px"}}/>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
        >
            Đăng ký để nhận thông tin
        </Typography>
      </Box>
      <Box sx={{display:"flex"}}>
        <EmailIcon fontSize="small" sx={{mr:"5px"}}/>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
        >
            customerservice@highlandscoffee.com.vn
        </Typography>
      </Box>
    </Box>
  );
}
