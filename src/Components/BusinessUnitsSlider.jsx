import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useEffect, useRef } from "react";
import { strapiUrl } from "../lib/utils";

const BusinessUnitsSlider = ({ businessUnitsSliderData, activeTabId }) => {
  const sliderRef = useRef(null);

  const filteredData =
    activeTabId === "All"
      ? businessUnitsSliderData
      : businessUnitsSliderData.filter(
          (item) => item.WelfareUnit === activeTabId
        );

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0); // Reset slider to the first slide
    }
  }, [activeTabId]);

  const settings = {
    infinite: false,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const baseurl = strapiUrl();

  return (
    <div className="business-slider">
      <Slider ref={sliderRef} {...settings} className="business-slide">
        {filteredData.map((item) => (
          <div key={item.id}>
            <div className="unitmain-box slider__card d-flex flex-column justify-content-between overflow-hidden rounded-3 bg-white">
              <div className="h-100">
                <img
                  src={`${baseurl}${item.CardImage.url}`}
                  className="img-fluid"
                  loading="lazy"
                  alt={item.CardImage.alternativeText || ""}
                />
                <div className="p-4">
                  <h3>{item.Title}</h3>
                  <p className="m-0">{item.SliderCardDescription}</p>
                </div>
              </div>

              <div className="unitbtnss">
                <Link
                  className="text-center d-block w-100"
                  to={`/business-units/${item.slug}`}
                >
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BusinessUnitsSlider;
