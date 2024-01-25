import { useState } from "react";
import Slider from "react-slick";

import sliderImage1 from "../assets/contactus/trust1.png";
import sliderImage2 from "../assets/contactus/trust2.png";
import sliderImage3 from "../assets/contactus/trust3.png";
import sliderImage4 from "../assets/contactus/trust4.png";
import sliderImage5 from "../assets/contactus/trsut5.png";

import galleryImage1 from "../assets/media/gallery-1.png";
import galleryImage2 from "../assets/media/gallery-2.png";
import galleryImage3 from "../assets/media/gallery-3.png";
import galleryImage4 from "../assets/media/gallery-4.png";
import galleryImage5 from "../assets/media/gallery-5.png";
import galleryImage6 from "../assets/media/gallery-6.png";

const sliderImages = [
  sliderImage1,
  sliderImage2,
  sliderImage3,
  sliderImage4,
  sliderImage5,
];

const galleryImages = [
  galleryImage1,
  galleryImage2,
  galleryImage3,
  galleryImage4,
  galleryImage5,
  galleryImage6,
];

const Media = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    // autoplay: true,
    slidesToShow: 3,
    afterChange: (index) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  Our <span>Gallery</span>
                </h1>

                <h5>
                  Home | <span>Gallery</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading"> AWT</span>
                <h2>Inspiring Lives with Dignified Service</h2>
                <p>
                  Discover the scenic stories of manpowers’ struggle,
                  resilience, and diligence by exploring the gallery of Army
                  Welfare Trust. Witness the success our subsidiaries have
                  achieved so far!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <Slider {...settings} className="centered-slider">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`centered-card rounded-1 d-flex align-items-center justify-content-center w-100 h-100 ${
                index === currentSlide
                  ? "card-bg-green card-scale"
                  : "card-bg-yellow"
              }`}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </Slider>

        <div className="container my-5 mx-auto">
          <div className="row">
            {galleryImages.map((image, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <img
                  src={image}
                  alt={`${index + 1}`}
                  className="img-fluid w-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Media;
