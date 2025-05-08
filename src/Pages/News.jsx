import { Col, Container, Row, Card } from "react-bootstrap";
import LoadingSpinner from "../Components/LoadingSpinner";
import { GetResources } from "../data/GetData";
import { getStrapiURL } from "../lib/utils";
import header from "../assets/headers/News.jpg";

const News = () => {
  const { data, error, isPending } = GetResources();
  const apiurl = getStrapiURL();

  if (isPending) return <LoadingSpinner />;
  if (error) return "An error occured!!";

  return (
    <div>
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
                  AWT <span>News</span>
                </h1>
                {/* <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>News</Breadcrumb.Item>
                </Breadcrumb> */}
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section>
        <Container className="py-4">
          <Row>
            {data.map((news) => (
              <Col key={news.id} md={6} lg={4} className="mb-4">
                <Card className="h-100 p-0 border-0 news-card">
                  <Card.Img
                    variant="top"
                    src={`${apiurl}${news.Image.url}`}
                    alt={news.Image.alternativeText}
                  />
                  <Card.Body className="d-flex flex-column p-3">
                    <Card.Title className="text-center">
                      {news.Title}
                    </Card.Title>
                    <Card.Text className="text-center">
                      {news.Description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>{" "}
        </Container>
      </section>
    </div>
  );
};

export default News;
