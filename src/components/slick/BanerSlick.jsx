import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collection } from "./collection";
import './style.css'
const BanerSlick = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true
  };
  return (
    <div style={{ width: "100%", overflow:"hidden" }}>
      <Slider {...settings}>
        {collection.map((item) => {
          return (
            <div>
              <img height="auto" width="100%" src={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default BanerSlick;
