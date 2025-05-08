import LoadingSpinner from "../Components/LoadingSpinner";
import ImagesSlider from "../Components/ImagesSlider";
import { Button, Container, Row } from "react-bootstrap";
import { GetGalleryItems } from "../data/GetData";
import { getStrapiURL } from "../lib/utils";
import { Link } from "react-router-dom";
import PDFFlipbook from "../Components/Flipbook";
import header from "../assets/headers/Media.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const Media = () => {
  const [visibleCards, setVisibleCards] = useState(4);
  const baseurl = getStrapiURL();

  const { data, error, isPending } = GetGalleryItems();

  if (isPending) return <LoadingSpinner />;
  if (error) return "An error occured!!";

  const handleLoadMore = () => {
    setVisibleCards((prevCount) => prevCount + 4);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };
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
            <div class="col-lg-12 text-center p-0">
              <div className="aboutuspage">
                <h1>
                  Our <span>Gallery</span>
                </h1>

                {/* <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>Gallery</Breadcrumb.Item>
                </Breadcrumb> */}
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
        <div className="my-5 mx-auto">
          <motion.div
            variants={containerVariants}
            animate={"visible"}
            className="row"
            initial="hidden"
          >
            {data.slice(0, visibleCards).map((card) => (
              <motion.div
                variants={cardVariants}
                key={card.id}
                className="col-lg-3 col-sm-6 m-0 service-card gallery-card p-2"
              >
                <Link to={`/media/${card.slug}`}>
                  <div className="card service-card p-0 overflow-hidden border-0 gallery-card overflow-hidden rounded-3">
                    <img
                      src={`${baseurl}${card.cover.url}`}
                      alt={card.cover.alternativeText || ""}
                      className="w-100 h-100"
                      loading="lazy"
                    />

                    <div className="p-3 text-center">
                      <h3>{card?.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          {visibleCards < data.length && (
            <div className="text-center mt-4">
              <Button onClick={handleLoadMore}>Load More</Button>
            </div>
          )}
        </div>
      </Container>

      <section className="aboutusbox">
        <Container>
          <Row>
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading">AWT</span>
                <h2>Corporate Profile 2022</h2>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <Container className="awt-book">
        <Row>
          <div className="col-lg-12 text-center">
            <PDFFlipbook />
          </div>
        </Row>
      </Container>

      <section className="spaceupdowngray">
        <ImagesSlider />
      </section>
    </>
  );
};

export default Media;
