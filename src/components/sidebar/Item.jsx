import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
  } from "@mui/material";
  import useStyles from "./styles";
  import { useLayoutState } from "../../context/LayoutContext";
  import { Link } from "react-router-dom";
  
  export default function Item(props) {
    const { isSidebarOpened } = useLayoutState();
  
    const classes = useStyles();
    return (
      <Link to = {props.link}  className={classes.link}>
          {/* key={props.key} */}
        <ListItem disablePadding sx={{ display: "block" }} onClick={props.onClick} value = {props.key}>  
          <ListItemButton
            className={classes.item}
            sx={{
              minHeight: 48,
              justifyContent: isSidebarOpened ? "initial" : "center",
              px: 2.5
            }}
          >
            <ListItemIcon
              className={classes.listIcon}
              sx={{
                minWidth: 0,
                mr: isSidebarOpened ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {props.icon}
            </ListItemIcon>
            <ListItemText
              className={classes.label}
              primary={isSidebarOpened ? props.label : ""}
            />
          </ListItemButton>
        </ListItem>
      </Link>
    );
  }
  