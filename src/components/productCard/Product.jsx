import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddBoxIcon from "@mui/icons-material/AddBox";
const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
      light: "red"
    },
    secondary: {
      main: "#edf2ff"
    }
  }
});

function Product(props) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          mb: "10px",
          display: "flex",
          boxShadow:
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        }}
      >
        <Box sx={{ m: "5px" }}>
          <img src={props.imageUrl} width={100} height={100} alt="Logo Item" />
        </Box>
        <Box
          sx={{
            width: "75%"
          }}
        >
          <Typography variant="h6" gutterBottom={true}>
            {props.name}
          </Typography>
          <Typography variant="p" sx={{ color: "#464646" }}>
            {props.description}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            pt: "10px",
            pr: "20px",
            height: "20px"
          }}
        >
          <Box
            sx={{
              position: "relative",
              color: "primary.main",
              width: "50%",
              mr: "10px"
            }}
          >
            {props.price}
            <Box
              sx={{
                position: "absolute",
                top: "-8px",
                right: "-8px"
              }}
            >
              đ
            </Box>
          </Box>
          <IconButton aria-label="add" size="medium">
            <AddBoxIcon sx={{ color: "#ee4d2d" }} />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Product;
