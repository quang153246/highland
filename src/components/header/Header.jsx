import React from "react";
import useStyles from "./styles";
import classNames from "classnames";
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../../assets/images/logo.png";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import {saveToLocalStorage, getFromLocalStorage} from "../services/localStorage"
import { Link } from "react-router-dom";

export default function Header() {
  const theme = createTheme();
  const classes = useStyles();
  //global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  
  const [profileMenuOpen, setProfileMenuOpen] = React.useState(false);
  const [profileMenu, setProfileMenu] = React.useState(null);
  const [language, setLanguage] = React.useState(getFromLocalStorage("lng") || "Vi");
  saveToLocalStorage("lng",language)

  const handleChangeLng = (e) => {
    setLanguage(e.target.innerText);
  };
  return (
    <ThemeProvider theme={theme}>
      <AppBar sx={{bgcolor:"#b22830" }} className={classes.appBar}>
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleSidebar(layoutDispatch)}
          >
            {layoutState.isSidebarOpened ? <ArrowBackIcon /> : <MenuIcon />}
          </IconButton>
          <Link className={classes.dpFlex} to={"/"}>
            <img src={logo} alt="logo" style={{ width: "80px" }} />
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          <span style={{ marginRight: "30px" }}>
            <span
              onClick={handleChangeLng}
              value="Vi"
              className={classNames(classes.lngSelect, {
                [classes.active]: language==="Vi",
              })}
              style={{
                marginRight: "8px",
                cursor: "pointer",
              }}
            >
              Vi
            </span>
            |
            <span
              onClick={handleChangeLng}
              value="En"
              className={classNames(classes.lngSelect, {
                [classes.active]: language==="En",
              })}
              style={{ marginLeft: "8px", cursor: "pointer" }}
            >
              En
            </span>
          </span>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={(e) => {
              setProfileMenuOpen(!profileMenuOpen);
              setProfileMenu(e.currentTarget);
            }}
          >
            <PersonIcon />
          </IconButton>
          <Menu
            id="profile-menu"
            open={Boolean(profileMenu)}
            anchorEl={profileMenu}
            onClose={() => setProfileMenu(null)}
            sx={{
              mt: "24px",
              minWidth: 265,
            }}
            disableAutoFocusItem
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", padding: "16px" }}
            >
              <Typography variant="h5" weight="medium" className={classes.appBar}>
                user123@gmail.com
              </Typography>
              <Typography
                sx={{ textDecoration: "none", fontSize: "16px" }}
                component="a"
                color="primary"
                href="https://flatlogic.com"
              >
                TMA Solutions
              </Typography>
            </Box>
            <MenuItem className={classes.menuItem}>
              <PersonIcon sx={{ mr: "10px" }} className={classes.menuIcon} />{" "}
              Profile
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <PersonIcon sx={{ mr: "10px" }} className={classes.menuIcon} />{" "}
              Change Password
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <PersonIcon sx={{ mr: "10px" }} className={classes.menuIcon} />{" "}
              Tasks
            </MenuItem>
            <MenuItem className={classes.menuItem}>
              <PersonIcon sx={{ mr: "10px" }} className={classes.menuIcon} />{" "}
              Messages
            </MenuItem>
            <Box sx={{ cursor: "pointer", ml: "16px", mt: "8px" }}>
              <Typography color="primary">Sign Out</Typography>
            </Box>
          </Menu>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
