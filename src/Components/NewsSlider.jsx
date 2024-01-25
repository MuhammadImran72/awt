import { Link } from "react-router-dom";

import slideImage1 from "../assets/news/news3.png";
import slideImage2 from "../assets/news/news1.png";
import slideImage3 from "../assets/news/news2.png";
import slideImage4 from "../assets/news/news4.png";
import slideImage5 from "../assets/news/news5.png";

import Slider from "react-slick";

const sliderData = [
  {
    slideTitle: "AWM Dyeing & Garments Fabrication Facility",
    slideLink: "/news",
    slideImage: slideImage1,
  },
  {
    slideTitle: "Army Welfare Trust & Pakistan Hockey Federation",
    slideLink: "/news",
    slideImage: slideImage2,
  },
  {
    slideTitle: "AGL SAP Business Go-Live Ceremony",
    slideLink: "/news",
    slideImage: slideImage3,
  },
  {
    slideTitle: "Digital Transformation & Cyber Security Seminar",
    slideLink: "/news",
    slideImage: slideImage4,
  },
  {
    slideTitle: "Agreement Signing Ceremony",
    slideLink: "/news",
    slideImage: slideImage5,
  },
];

const NewsSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
  return (
    <section className="mb-5 container">
      <div className="mb-4">
        <div className="row">
          <div className="col-lg-12">
            <div className="aboutus">
              <span className="linesheading">Latest News and Events</span>
              <h2>Our Contemporary Projects and Recent Updates</h2>
            </div>
          </div>
        </div>
      </div>
      <Slider {...sliderSettings}>
        {sliderData.map((slide, index) => (
          <div className="col-lg-3 col-md-2 col-sm-12">
            <div className="image" key={index}>
              <img
                src={slide.slideImage}
                alt={`${slide.slideTitle}`}
                style={{
                  objectFit: "cover",
                  minHeight: "450px",
                  width: "100%",
                }}
              />
              <div className="overlay">
                <h2 className="news-title">{slide.slideTitle}</h2>
                <Link to={slide.slideLink} className="news-link">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default NewsSlider;
