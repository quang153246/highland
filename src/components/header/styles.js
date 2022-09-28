import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  appBar: {
    zIndex:1300,
    width:"100wh",
    marginTop:"0",
    // backgroundColor: 'success.main',

  },
  toolBar: {},
  dpFlex:{
    display:"flex",
    alignItems:"center",
  },
  menuItem: {
    "&:hover, &:focus": {
      backgroundColor: "#ccc",
    },
  },
  menuIcon: {
    "&:hover": {
      color: "#536DFE", 
    },
  },
  lngSelect: {
    cursor: "pointer",
    "&:hover, &:focus": {
      color: "#ccc",
    },
  },
  active: {
    // color: "#00713d",
    color: "red",
    borderBottom:"1px solid",
  },
}));
