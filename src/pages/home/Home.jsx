import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BanerSlick from "../../components/slick/BanerSlick";
import SubBaner from "../../components/subBaner/SubBaner"
import sub_baner1 from "../../assets/images/sub_baner1.jpg";
import sub_baner2 from "../../assets/images/sub_baner2.jpg";
import sub_baner3 from "../../assets/images/sub_baner3.jpg";
export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <BanerSlick/>
      <SubBaner 
        imgUrl = {sub_baner1}
      />
      <SubBaner 
        imgUrl = {sub_baner2}
      />
      <SubBaner 
        imgUrl = {sub_baner3}
      />
    </div>
  );
}
