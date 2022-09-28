import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  link: {
    textDecoration: "none"
  },
  drawerOpen: {
    // width: drawerWidth,
    // transition: theme.transitions.create("width", {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  drawerClose: {
    // transition: theme.transitions.create("width", {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    overflowX: "hidden",
    // width: theme.spacing(7) + 40,
    // [theme.breakpoints.down("sm")]: {
    //   width: drawerWidth,
    // },
  },
  item: {
    "&:hover, &:focus": {
      backgroundColor: "#ccc"
    }
  },
  listIcon: {
    "&:focus, &:focus": {
      color: "#536DFE"
    }
  },
  label: {
    color: "#4a4a4a"
  }
}));
