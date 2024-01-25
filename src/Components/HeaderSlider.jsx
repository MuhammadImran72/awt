import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import headerImage1 from "../assets/AWT PICS/header-img-2.jpg";
import headerImage2 from "../assets/AWT PICS/header-img.jpeg";
import headerImage3 from "../assets/AWT PICS/header-img-3.jpg";

const sliderData = [
  {
    slideTitle: "Excellence Rooted in Trust and Commitment",
    slideText:
      "Army Welfare Trust is raised with noble aspirations of offering supporting hands to the welfare of families of Martyrs, soldiers affected by the adversities of war & conflicts, and veterans",
    slideImage: headerImage1,
  },
  {
    slideTitle: "Standing Strong for Nation’s Heroes' Welfare",
    slideText:
      "Army Welfare Trust is raised with noble aspirations of offering supporting hands to the welfare of families of Martyrs, soldiers affected by the adversities of war & conflicts, and veterans",
    slideImage: headerImage2,
  },
  {
    slideTitle:
      "Strengthening Pakistan’s Economy Through Commercial Enterprises",
    slideText:
      "Army Welfare Trust is raised with noble aspirations of offering supporting hands to the welfare of families of Martyrs, soldiers affected by the adversities of war & conflicts, and veterans",
    slideImage: headerImage3,
  },
];

const CustomArrow = ({ onClick, icon, className }) => (
  <div className={`custom-arrow ${className}`} onClick={onClick}>
    {icon}
  </div>
);

const HeaderSlider = () => {
  const sliderSettings = {
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <CustomArrow icon={<FaArrowLeft />} className="prev-arrow" />,
    nextArrow: <CustomArrow icon={<FaArrowRight />} className="next-arrow" />,
  };
  return (
    <section>
      <Slider {...sliderSettings}>
        {sliderData.map((slide, index) => (
          <div key={index}>
            <div
              style={{
                background: `url(${slide.slideImage}) no-repeat`,
                minHeight: "100vh",
                width: "100vw",
                backgroundSize: "cover",
              }}
              className="header d-flex flex-column justify-content-center align-items-center text-white h-100"
            >
              <div className="dark-overlay"></div>
              <div className="headerpage">
                <h1 className="text-center">{slide.slideTitle}</h1>
                <p className="text-center">{slide.slideText}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeaderSlider;
