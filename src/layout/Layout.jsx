import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SideBar from "../components/sidebar/SideBar";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Menu from "../pages/menu/Menu";
import classNames from "classnames";
import useStyle from './styles'
import Phone from '../components/phone/Phone'
import { Toolbar } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLayoutState } from "../context/LayoutContext";
export default function Layout() {
    console.log("layout")
    const classes = useStyle()
    const {isSidebarOpened} = useLayoutState()
    console.log(isSidebarOpened)
  return (
    <div className={classes.root}>
        <BrowserRouter>
            <Header />
            <SideBar />
            <div className={isSidebarOpened ? classes.content : classes.contentShift}>
                <Toolbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
                <Footer/>
            </div>
            {/* <Phone/> */}
        </BrowserRouter>
    </div>
  );
}
