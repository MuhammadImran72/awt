import { Col, Container, Row } from "react-bootstrap";
import ImagesSlider from "../Components/ImagesSlider";
import { GetBods } from "../data/GetData";
import LoadingSpinner from "../Components/LoadingSpinner";
import { getStrapiURL } from "../lib/utils";
import header from "../assets/headers/committee-of-administration.png";

const CommitteeOfAdministration = () => {
  const { data, error, isPending } = GetBods();
  if (isPending) return <LoadingSpinner />;

  if (error) return "An error occured!!!";

  const committeOfAdministration = data.filter(
    (item) => item.Category.trim() === "Committee of Administration"
  );

  const baseUrl = getStrapiURL();

  return (
    <>
      <section
        className="commonbg"
        style={{
          backgroundImage: `url(${header})`,
        }}
      >
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  {" "}
                  Committee of <span>Administration </span>{" "}
                </h1>
                {/* <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>
                    Committee of Administration
                  </Breadcrumb.Item>
                </Breadcrumb> */}
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
                <h2> Committee of Administration</h2>
                <p>
                  The Army Welfare Trust's administration is based on two tiers
                  of decision making
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Container>
        <Row className="pb-5 justify-content-center">
          {committeOfAdministration.map((item, index) => (
            <Col key={index} md={index < 2 ? 5 : 4} className="card-col p-2">
              <div className="fourimgsbox bordered-image mx-auto position-relative">
                <img
                  src={`${baseUrl}${item.Image.url}`}
                  className="img-fluid bod-img"
                  width={110}
                  height={110}
                  alt={item.Image.alternativeText || ""}
                />
              </div>
              <div className="adminbox">
                <h3>{item.Post}</h3>
                {item.Name !== null && <h5>{item.Name}</h5>}
                <p>{item.Role}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

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

export default CommitteeOfAdministration;
