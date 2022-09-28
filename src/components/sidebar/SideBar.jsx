import React from "react";
import { Toolbar, Drawer, List, Divider } from "@mui/material";
import { useLayoutState } from "../../context/LayoutContext";
import useStyles from "./styles";
import { structure } from "./structure";
import Item from "./Item";
import theme from "../../theme";
import classNames from "classnames";

export default function SideBar() {
  const classes = useStyles();
  const { isSidebarOpened } = useLayoutState();
  const [selectItem, setSelectItem] = React.useState("home");
  const [isPermanent, setIspermanent] = React.useState(true);
  const handleSelectItem = (e) => {
    console.log(e.target.value);
  };
  function handleWindowWidthChange() {
    const windowWidth = window.innerWidth;
    const breakpoint = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpoint;
    if (isSmallScreen && isPermanent) {
      setIspermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setIspermanent(true);
    }
  }
  React.useEffect(function () {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      open={isSidebarOpened}
      sx={{
        zIndex: 0,
        width: isSidebarOpened ? 130 : 64,
        boxSizing: "border-box",
        overflow:"hidden"
      }}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
    >
      <Toolbar />
      <List>
        {structure.map((item) => {
          return (
            <Item
              onClick={(e) => {
                document.title = item.title
              }}
              label={item.label}
              value={item.key}
              key={item.key}
              icon={item.normalIcon}
              link={item.link}
            />
          );
        })}
      </List>
      <Divider />
    </Drawer>
  );
}
