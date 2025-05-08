import Slider from "react-slick";

import logo1 from "../assets/Logos/Boxed/1.png";
import logo2 from "../assets/Logos/Boxed/2.png";
import logo3 from "../assets/Logos/Boxed/3.png";
import logo4 from "../assets/Logos/Boxed/4.png";
import logo5 from "../assets/Logos/Boxed/5.png";
import logo6 from "../assets/Logos/Boxed/6.png";
import logo7 from "../assets/Logos/Boxed/7.png";
import logo8 from "../assets/Logos/Boxed/8.png";
import logo9 from "../assets/Logos/Boxed/9.png";
import logo10 from "../assets/Logos/Boxed/10.png";
import logo11 from "../assets/Logos/Boxed/11.png";
import logo12 from "../assets/Logos/Boxed/12.png";
import logo13 from "../assets/Logos/Boxed/13.png";
import logo14 from "../assets/Logos/Boxed/14.png";
import logo15 from "../assets/Logos/Boxed/15.png";
import logo16 from "../assets/Logos/Boxed/16.png";
import logo17 from "../assets/Logos/Boxed/17.png";
const trustImages = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
];

const ImagesSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 2000,
    autoplaySpeed: 100,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="logo-slider container">
      {trustImages.map((image, index) => (
        <div key={index}>
          <div className="trsutimages">
            <img src={image} className="img-fluid" alt="" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImagesSlider;
