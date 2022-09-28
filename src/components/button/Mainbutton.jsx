import React from 'react'
import { Button } from '@mui/material'
import useStyles from "./style"
const Mainbutton = (props) => {
    const classes = useStyles()
  return (
    <Button
        className={classes.button}
        sx={{
            // width: `${props.width}`,
            fontSize: "18px",
            width: `50%`,
            height: `50px`,
            color:"inherit",
            border: `1px solid`,
            borderRadius: "10px",
            transitionDelay: "0s",
            transitionTimingFunction: "linear",
            transitionDuration: "0.5s",
            "&:hover": {
                background: "#b22830",
                color:"#FFF",
                border: "none",
                transitionDelay: "0s",
                transitionTimingFunction: "linear",
            },
        }}
    >
        {props.label}
    </Button>
  )
}

export default Mainbutton