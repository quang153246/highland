import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://www.tma.vn/">
        TMA Solutions
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
//<Copyright sx={{ mt: 6, mb: 4 }} />
export default Copyright;
