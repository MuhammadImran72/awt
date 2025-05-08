import { Container, Row } from "react-bootstrap";
import header from "../assets/headers/Careers.jpg";

const Careers = () => {
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
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>Careers</h1>

                {/* <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>Careers</Breadcrumb.Item>
                </Breadcrumb> */}
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutus">
                <h2>Want to Build a Successful Career with Us?</h2>
                <p>
                  A redirect link will be added to the careers portal which is
                  currently under development
                  {/* Army Welfare Trust brings employment opportunities for you.
                  Whether you are a fresher or experienced candidate, we have
                  jobs for you in various departments including education,
                  defense, finance, property, and other sectors that suit your
                  interests and passions. Become a part of our business, excel
                  in your career, and make Pakistan proud! */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
