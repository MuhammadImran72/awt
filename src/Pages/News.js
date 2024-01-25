import new1 from "../assets/news/news1.png";
import new2 from "../assets/news/news2.png";
import new3 from "../assets/news/news3.png";
import new4 from "../assets/news/news4.png";
import new5 from "../assets/news/news5.png";

const News = () => {
  return (
    <div>
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  AWT <span>News</span>
                </h1>

                <h5>
                  Home | <span>News</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="newsimages">
                <img src={new1} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="newsinfo">
                <h3>
                  {" "}
                  Agreement Signing Ceremony - Army Welfare Trust & Pakistan
                  Hockey Federation{" "}
                </h3>
                <p>
                  {" "}
                  AWT Determined for Revival of the Glorious Past - Pakistan
                  Hockey
                </p>

                <button type="submit" class="sendmessage mb-3">
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="newsimages">
                <img src={new2} className="img-fluid" alt="" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="newsinfo">
                <h3> AGL SAP Business Go-Live Ceremony </h3>
                <p>
                  {" "}
                  AGL SAP Business Go-Live ceremony held at AWT plaza,
                  Rawalpindi on 22 Mar 2023. Rollout of HCM apps are in
                  progress.
                </p>

                <button type="submit" class="sendmessage mb-3">
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="newsimages">
                <img src={new3} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="newsinfo">
                <h3> AWM Dyeing & Garments Fabrication Facility </h3>
                <p>
                  {" "}
                  Inaugurated by Lt Gen Naveed Mukhtar, HI(M) Retd MD AWT on 19
                  July 2023
                </p>

                <button type="submit" class="sendmessage mb-3">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4">
              <div className="newsimages">
                <img src={new4} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="newsinfo">
                <h3> Digital Transformation & Cyber Security Seminar </h3>
                <p>
                  {" "}
                  Digital Transformation & Cyber Security Seminar - 09 March
                  2023
                </p>

                <button type="submit" class="sendmessage mb-3">
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="newsimages">
                <img src={new5} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
