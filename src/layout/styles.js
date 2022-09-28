import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    maxWidth: "100vw",
    overflowX: "hidden",
  },
  content: {
    flexGrow: 1,
    width: `calc(100vw - 170px)`,
    minHeight: "100vh",
  },
  contentShift: {
    flexGrow: 1,
    width: `calc(100vw - 64px)`,
    minHeight: "100vh",
  },
}));
