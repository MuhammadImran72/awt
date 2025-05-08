import LoadingSpinner from "./LoadingSpinner";
import { GetHeaderData } from "../data/GetData";
import { Carousel } from "react-bootstrap";
import { getStrapiURL } from "../lib/utils";

const HeaderSlider = () => {
  const { data, error, isPending } = GetHeaderData();
  if (isPending) return <LoadingSpinner />;
  if (error) return "Cannot fetch data";

  const baseurl = getStrapiURL();

  return (
    <>
      <Carousel controls={false} indicators={false} interval={2500}>
        {data.map((slide, index) => (
          <Carousel.Item key={slide.id}>
            <div className="header d-flex flex-column justify-content-center align-items-center text-white position-relative">
              <img
                src={`${baseurl}${slide.Image.url}`}
                alt={slide.Image.alternativeText}
                className="header__background-image"
                loading="lazy"
              />
              <div className="dark-overlay" />
              <div className="headerpage">
                {index > 0 ? (
                  <h2 className="text-center">{slide.Title}</h2>
                ) : (
                  <h1 className="text-center">{slide.Title}</h1>
                )}
                <p className="text-center">{slide.Text}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default HeaderSlider;
