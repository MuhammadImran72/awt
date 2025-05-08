import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetNewsletterBySlug } from "../data/GetData";
import header from "../assets/headers/Media.jpg";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Container, Row } from "react-bootstrap";
import ImagesSlider from "../Components/ImagesSlider";
import NewsletterLighthouse from "../Components/NewsletterLighthouse";

const SingleNewsletter = () => {
  const { slug } = useParams();
  const { data, error, isPending } = GetNewsletterBySlug(slug);
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
                  {data.Title} <span>Newsletter</span>
                </h1>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <Container className="mt-5">
        <NewsletterLighthouse galleryItems={data.Pages.data} />
      </Container>

      <section className="spaceupdowngray">
        <ImagesSlider />
      </section>
    </>
  );
};

export default SingleNewsletter;
