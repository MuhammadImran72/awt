import AboutTimeline from "../Components/AboutTimeline.jsx";
import ImagesSlider from "../Components/ImagesSlider.jsx";
import header from "../assets/headers/About-Us.jpg";
const AboutUs = () => {
  return (
    <div>
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
                  About <span>Us </span>
                </h1>

                {/* <Breadcrumb>
                  <Breadcrumb.Item href="/" className="">
                    Home
                  </Breadcrumb.Item>

                  <Breadcrumb.Item active>About Us</Breadcrumb.Item>
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
                <h2> A Legacy of Service, Support, and Progress </h2>
                <p>
                  Army Welfare Trust was founded on noble principles, and over
                  the years, it has persistently grown and evolved. Along with
                  fulfilling the objective of the welfare of our Army Soldiers
                  through funds generation, we are making progress of paramount
                  importance in all of our businesses. AWT is contributing to
                  the economy of Pakistan by opening doors to career
                  opportunities for its people.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img src={visionarmyhelp} className="rounded sizesss" alt="" />
            </div>
          </div>
        </div>
      </section> */}

      <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="aboutus">
                <span className="linesheading"> History </span>
                <h2> Milestones in the History of AWT </h2>
                <p>
                  From its inception to the establishment of vital business
                  units in different sectors, the journey of the Army Welfare
                  Trust is an unwavering commitment and transformative impact on
                  countless lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutTimeline />

      <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="aboutus">
                <span className="linesheading"> Insights About Our </span>
                <h2> Corporate Journey 2024</h2>
                <p>
                  From sustainable development projects to other key
                  initiatives, the Army Welfare Trust accomplished significant
                  milestones. 2024 proved to be a year of impressive advancement
                  for the Army Welfare Trust.
                </p>
              </div>
            </div>
          </div>
          {/*
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="Corporate">
                <form>
                  <div class="input-group mt-3 ">
                    <input
                      type="emial"
                      class="form-control"
                      placeholder="Email address..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <button type="submit" className="download">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="spaceupdowngray">
        <div className="container-fluid overflow-hidden no-gutters p-0">
          <div className="row">
            <ImagesSlider />
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
