import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";
import CallIcon from "@mui/icons-material/Call";
export const structure = [
  {
    label: "Home",
    key: "home",
    focusIcon: <HomeIcon />,
    normalIcon: <HomeOutlinedIcon />,
    link: "/",
    title: "Home | Highlands Coffee",
  },
  {
    label: "Menu",
    key: "menu",
    focusIcon: <MenuBookIcon />,
    normalIcon: <MenuBookIcon />,
    link: "/menu",
    title: "Menu | Highlands Coffee",
  },
  {
    label: "News",
    key: "News",
    focusIcon: <CallIcon />,
    normalIcon: <CallIcon />,
    link: "/news",
    title: "News | Highlands Coffee",
  },
  {
    label: "Blog",
    key: "blog",
    focusIcon: <ArticleIcon />,
    normalIcon: <ArticleIcon />,
    link: "/blog",
    title: "Blog | Highlands Coffee",
  },
];
