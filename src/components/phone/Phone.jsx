import React, { useEffect, useState } from "react";
import { Avatar, Box } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
function Phone() {
  const [size, setSize] = useState(5);
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      if (size > 25) setFlag(false);
      if (size < 5) setFlag(true);
      if (flag) return setSize(() => size + 0.5);
      if (!flag) return setSize(() => size - 0.5);
    }, 20);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <Box sx={{ position: "fixed", bottom: 30, right: 30, cursor: "pointer" }}>
      <Avatar
        sx={{
          bgcolor: "#24ce7b ",
          m: "auto",
          width: "60px",
          height: "60px",
          boxShadow: `0px 0px 0px ${size}px #66dda3`
        }}
      >
        <CallIcon fontSize="large" />
      </Avatar>
    </Box>
  );
}

export default Phone;
