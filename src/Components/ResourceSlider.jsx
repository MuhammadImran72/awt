import React, { useRef } from "react";
import NewsCard from "./NewsCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import Slider from "react-slick";
import { GetResources } from "../data/GetData";

const ResourceSlider = () => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 500,
        settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 3, slidesToScroll: 1, infinite: true },
      },
    ],
  };
  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const { data, error, isPending } = GetResources();

  if (isPending) return <div>Loading...</div>;
  if (error) return "An error occured!!";

  return (
    <>
      <Slider {...settings} className="resource-slider h-100" ref={sliderRef}>
        {data.map((slide, index) => (
          <NewsCard key={index} cardData={slide} />
        ))}
      </Slider>
      <div className="resource-slider-controls d-flex justify-content-center align-items-center gap-3 pt-3 custom-controls">
        <span className="custom-prev-icon" onClick={handlePrev}>
          <FaChevronLeft size={20} />
        </span>
        <span className="custom-next-icon" onClick={handleNext}>
          <FaChevronRight size={20} />
        </span>
      </div>
    </>
  );
};

export default ResourceSlider;
