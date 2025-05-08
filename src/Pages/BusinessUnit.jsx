import { useNavigate, useParams } from "react-router-dom";
import ImagesSlider from "../Components/ImagesSlider";
import { BusinessUnitDataBySlug } from "../data/GetData";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Col, Container, Row } from "react-bootstrap";
import { getStrapiURL } from "../lib/utils";
import { FaPhone, FaLocationDot, FaGlobe } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const baseurl = getStrapiURL();

const ServiceCard = ({ card }) => {
  return (
    <Col lg={4} md={6} xs={12} className="mb-4 service-card">
      <div className="card p-0 overflow-hidden">
        {card.Image && Object.keys(card.Image).length > 0 && (
          <img
            src={`${baseurl}${card.Image.url}`}
            alt={card.Image.alternativeText || ""}
            className="w-100"
            loading="lazy"
            width={card.Image.width}
            height={card.Image.height}
          />
        )}

        <div className="p-3">
          <h3 className={card.Description === null ? "my-0" : "my-2"}>
            {card?.Title}
          </h3>
          <p className="m-0">{card?.Description}</p>
        </div>
      </div>
    </Col>
  );
};

const BusinessUnit = () => {
  const { id } = useParams();
  const { data, error, isPending } = BusinessUnitDataBySlug(id);
  const navigate = useNavigate();

  if (error) {
    navigate("/");
    return null;
  }

  if (isPending) return <LoadingSpinner />;

  return (
    <>
      <section
        className="feulaskeri"
        style={{
          backgroundImage: `url(${baseurl}${data.BannerImage.url})`,
        }}
      >
        <div className="container">
          <div className="row text-center">
            <h1 className="service-title">{data.Title}</h1>
          </div>
        </div>
      </section>

      <section className="spaceupdown">
        <div className="container">
          <div className="row justify-content-start align-items-center gap-3 flex-lg-nowrap flex-wrap">
            <div className="col-lg-6">
              <div className="ourmission p-0">
                <span className="leftlineheading">{data.Title}</span>
                <h2>{data.PageTitle}</h2>
                <p>{data.PageDescription}</p>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                loading="lazy"
                src={`${baseurl}${data.Image1.url}`}
                alt={data.Image1.alternativeText || ""}
                className="w-100 rounded-4"
              />
            </div>
          </div>
        </div>
      </section>

      {data.Partners !== null && (
        <section className="spaceupdown mb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="aboutus">
                  {/* <span className="linesheading">Features</span> */}
                  <h2>{data.Partners.PartnerSectionTitle}</h2>
                  {data.Partners.PartnerSectionDescription !== null && (
                    <p>{data.Partners.PartnerSectionDescription}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {data.Partners !== null && data.Partners.Partner.length > 0 && (
        <Container>
          <Row>
            {data.Partners.Partner.map((partner) => (
              <Col lg={4} md={6} xs={12} className="p-3" key={partner.id}>
                <div className="card partner-card h-100">
                  <div className="position-relative d-flex flex-column text-center align-items-center gap-3 w-100 my-auto">
                    {partner.image !== "" && (
                      <img
                        loading="lazy"
                        src={`${baseurl}${partner.Image.url}`}
                        alt={partner.Image.alternativeText || ""}
                        className="partners-icon"
                      />
                    )}
                    <div>
                      <h3>{partner.Title}</h3>
                      <p className="fs-5 my-2">{partner.Description}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      )}

      <section className="spaceupdown">
        <Container>
          <div className="row  d-flex justify-content-start align-items-center">
            <div className="col-lg-6">
              <img
                loading="lazy"
                src={`${baseurl}${data.Image2.url}`}
                className="img-fluid rounded-4"
                alt={data.Image2.alternativeText || ""}
              />
            </div>
            <div className="col-lg-6">
              <div className="ourmission p-0">
                <span className="leftlineheading">Support</span>
                <h2>{data.SupportTitle}</h2>
                <p>{data.SupportDescription}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {data.Services !== null && data.Services.Service.length > 0 && (
        <section className="spaceupdown">
          <Container>
            <div className="row mb-2">
              <div className="col-lg-12">
                <div className="aboutus">
                  {/* <span className="linesheading">Our services</span> */}
                  <h2>{data.Services.ServiceSectionTitle}</h2>
                  {data.Services.ServiceSectionDescription !== null && (
                    <p>{data.Services.ServiceSectionDescription}</p>
                  )}
                </div>
              </div>
            </div>

            {data.Services.Service.length > 0 && (
              <div className="row">
                {data.Services.Service.map((card, index) => (
                  <ServiceCard key={index} card={card} />
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      <section className="spaceupdown unit__contact">
        <Container className="p-0">
          <h2>Contact {data.Title}</h2>

          <ul className="servicebottommenulinks">
            {data.contact?.website && (
              <li>
                <FaGlobe size={26} />
                <a
                  href={data.contact?.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.contact?.website}
                </a>
              </li>
            )}
            <li>
              <FaPhone size={26} />
              <a href={`tel:${data.contact.number}`}> {data.contact.number} </a>
            </li>
            <li>
              <MdEmail size={26} />
              <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a>
            </li>
            <li>
              <FaLocationDot size={26} />
              <button className="link-button">{data.contact.address}</button>
            </li>
          </ul>
        </Container>
      </section>

      <section className="spaceupdowngray">
        <div className="container-fluid overflow-hidden no-gutters p-0">
          <div className="row">
            <ImagesSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessUnit;
