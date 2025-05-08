import React from "react";
import header from "../assets/headers/Media.jpg";
import { Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { GetGalleryItemsBySlug } from "../data/GetData";
import LoadingSpinner from "../Components/LoadingSpinner";
import ImagesSlider from "../Components/ImagesSlider";
import LighthouseGallery from "../Components/LighthouseGallery";

const SingleMedia = () => {
  const { slug } = useParams();
  const { data, error, isPending } = GetGalleryItemsBySlug(slug);
  const navigate = useNavigate();

  if (error) {
    navigate("/");
    return null;
  }

  if (isPending) return <LoadingSpinner />;

  return (
    <>
      <section
        className="commonbg"
        style={{
          backgroundImage: `url(${header})`,
        }}
      >
        <Container>
          <Row>
            <div className="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  Our <span>Gallery</span>
                </h1>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="aboutusbox">
        <Container>
          <Row>
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading">AWT</span>
                <h2>Inspiring Lives with Dignified Service</h2>
                <p>
                  Discover the scenic stories of manpowers’ struggle,
                  resilience, and diligence by exploring the gallery of Army
                  Welfare Trust. Witness the success our subsidiaries have
                  achieved so far!
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <Container>
        <LighthouseGallery galleryItems={data.GalleryItems.data} />
      </Container>

      <section className="spaceupdowngray">
        <ImagesSlider />
      </section>
    </>
  );
};

export default SingleMedia;
