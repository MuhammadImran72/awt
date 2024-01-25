import handshaking from "../assets/Home/hands-helping.png";
import aboutvision from "../assets/Aboutus/aboutvision.png";
import visionarmy from "../assets/Aboutus/armyhelp.png";
import circlearmyarrow from "../assets/Aboutus/circlearrow.png";
import visionarmyhelp from "../assets/Aboutus/visionarmyhelp.png";
import partner from "../assets/askerifuel/handmaking.png";
import shinstars from "../assets/askerifuel/starsshining.png";
import careothers from "../assets/askerifuel/peoplecare.png";
import countery from "../assets/askerifuel/gobalworld.png";
import trust1 from "../assets/contactus/trust1.png";
import trust2 from "../assets/contactus/trust2.png";
import trust3 from "../assets/contactus/trust3.png";
import trust4 from "../assets/contactus/trust4.png";
import trust5 from "../assets/contactus/trsut5.png";
import trsut6 from "../assets/contactus/trust6.png";
import CounterBox from "../Components/CounterBox.js";
import Slider from "react-slick";
const AboutUs = () => {
  const counters = [
    {
      icon: "fa-thumbs-o-up",
      value: "4 B ",
      label: "Well Above 40 Billion Rupees Worth company ",
      colored: true,
    },
    {
      icon: "fa-group",
      value: "28000",
      label: "Providing 28000 Direct & Indirect Employments",
    },
    {
      icon: "fa-shopping-cart",
      value: "20",
      label: "20 Companies And Still Growing",
    },
    {
      icon: "fa-user",
      value: "2 B",
      label: "2 Billion Rupees Contributed To National Excequer",
    },
  ];
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var settingsllogo = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <section className="commonbg">
        <div className="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <div className="aboutuspage">
                <h1>
                  About <span>Us </span>
                </h1>

                <h5>
                  Home | <span>About Us </span>
                </h5>
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

      {/* <section >
        <div className="container">
          <div className="row spacepadding ">
            <div className="col-lg-3">
              <div className="fourboxmain">
                <div className="fourimgsbox">
                  <img src={partner} className="img-fluid" />
                </div>
                <div className="fourinfo">
                  <h3> 97+</h3>
                  <p> Partners</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourboxmain">
                <div className="fourimgsbox">
                  <img src={careothers} className="img-fluid" />
                </div>
                <div className="fourinfo">
                  <h3> 8945+</h3>
                  <p> Employees</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourboxmain">
                <div className="fourimgsbox">
                  <img src={shinstars} className="img-fluid" />
                </div>
                <div className="fourinfo">
                  <h3> 10M+</h3>
                  <p> Funds Generated</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="fourboxmain">
                <div className="fourimgsbox">
                  <img src={countery} className="img-fluid" />
                </div>
                <div className="fourinfo">
                  <h3> 100M+</h3>
                  <p>Country Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section>

<div className="container">
  <div className="row">
    <div className="col-lg-12">
    <div className="container">
      <div className="row">
        {counters.map((counter, index) => (
          <CounterBox key={index} {...counter} />
        ))}
      </div>
    </div>
    </div>
  </div>
</div>

</section> */}

      {/* <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="ourmission">
                <span className="leftlineheading"> Our Vission </span>
                <h2>Lorem ipsum dolor sit amet.</h2>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet. Ut alias voluptatibus eum
                  obcaecati sapiente qui harum quibusdam. Est impedit incidunt
                  et ducimus voluptates qui quam maiores qui quae suscipit est
                  assumenda.Lorem ipsum dolor sit amet. Ut alias voluptatibus
                  eum obcaecati sapiente qui harum quibusdam.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <img src={aboutvision} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img src={visionarmy} className="rounded sizesss" />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="ourmission">
                <span className="leftlineheading"> Our Vission </span>
                <h2>Earning Confidence as a Remarkable Welfare Organization
</h2>
                <p>
                Our vision is crystal clear; AWT envisions emerging as a leading welfare trust that meets high standards, principles, and industry norms with an unshakeable commitment. While setting benchmarks for excellence, we look forward to contributing genuinely to the world.


                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <img src={circlearmyarrow} />
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img src={visionarmyhelp} className="rounded sizesss" />
            </div>
          </div>
        </div>
      </section>

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
                  Trust is a tale of unwavering commitment and transformative
                  impact on countless lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="yeasrbrands">
        <div className="container">
          <div className="row">
            {/*  */}
            <div className="col-lg-12 tabssliders d-lg-flex flex-row-reverse">
              {/*  */}
              <ul class="nav col-lg-4 nav-tabs mb-3" id="ex1" role="tablist">
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link active"
                    id="ex1-tab-1"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    1972
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-2"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    1980s
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-3"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-3"
                    role="tab"
                    aria-controls="ex1-tabs-3"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    1984
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-4"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-4"
                    role="tab"
                    aria-controls="ex1-tabs-4"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    1990
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-6"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-6"
                    role="tab"
                    aria-controls="ex1-tabs-6"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    1995
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-7"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-7"
                    role="tab"
                    aria-controls="ex1-tabs-7"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    1996
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-8"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-8"
                    role="tab"
                    aria-controls="ex1-tabs-8"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    2002
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-9"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-9"
                    role="tab"
                    aria-controls="ex1-tabs-9"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    2009
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-10"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-10"
                    role="tab"
                    aria-controls="ex1-tabs-10"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    2014
                  </a>
                </li>
                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-11"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-11"
                    role="tab"
                    aria-controls="ex1-tabs-11"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    2015
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-12"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-12"
                    role="tab"
                    aria-controls="ex1-tabs-12"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    2017
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-13"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-13"
                    role="tab"
                    aria-controls="ex1-tabs-13"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    2018
                  </a>
                </li>

                <li class="nav-item" role="presentation">
                  <a
                    class="nav-link"
                    id="ex1-tab-14"
                    data-bs-toggle="tab"
                    href="#ex1-tabs-14"
                    role="tab"
                    aria-controls="ex1-tabs-14"
                    aria-selected="false"
                  >
                    {" "}
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    2020
                  </a>
                </li>
              </ul>
              {/* */}
              <div class="tab-content  col-lg-8" id="ex1-content">
                <div
                  class="tab-pane fade show active"
                  id="ex1-tabs-1"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-1"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3>Askari Farms & Seeds</h3>
                          <h5> 1972</h5>
                        </div>
                        <p>
                          {" "}
                          Askari Farms and Seeds is the first economic venture
                          of AWT that involves both conventional and modern
                          agriculture.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex1-tabs-2"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-2"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3>Askari Travel Wing</h3>
                          <h5> 1980s</h5>
                        </div>
                        <p>
                          Askari Travel Wing is comprised of Askari Travels and
                          Tours (AT&T) established in 1981 and Services Travels
                          and Tours (ST&T) initiated in 1982. Both companies are
                          certified by the International Air Transport
                          Association (IATA)
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex1-tabs-3"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-3"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3>Army Welfare Sugar Mills</h3>
                          <h5> 1984</h5>
                        </div>
                        <p>
                          Army Welfare Sugar Mills is one of the premier sugar
                          projects in the province of Sindh providing employment
                          to retired army personnel.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex1-tabs-4"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-4"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Askari Real Estate</h3>
                          <h5> 1990 </h5>
                        </div>
                        <p>
                          Askari Real Estate is transforming the lives of people
                          by turning their home visions into realities.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Askari Shoes</h3>
                          <h5> 1990 </h5>
                        </div>
                        <p>
                          Askari Shoes manufactures strong and durable DNS boots
                          with the best missionary from DESMA. Along with this,
                          it designs footwear for the civil market as well.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Askari Woolen</h3>
                          <h5> 1990 </h5>
                        </div>
                        <p>
                          Askari Woolen Mills is renowned for being the greatest
                          producer of woolen products in Pakistan.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3>Blue Lagoon and Army Welfare Mess</h3>
                          <h5> 1990 </h5>
                        </div>
                        <p>
                          Blue Lagoon and Army Welfare Mess has a centered
                          location in the Rawalpindi Cantt Area and is
                          considered to be one of the most captivating places to
                          visit.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div
                  class="tab-pane fade"
                  id="ex1-tabs-6"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-6"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Askari Aviation</h3>
                          <h5> 1995 </h5>
                        </div>
                        <p>
                          Askari Aviation has prominence in the industry as a
                          leader. They are rendering quality services and are
                          popularly known for their devotion and excellence.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3>Askari General Insurance Company Limited</h3>
                          <h5> 1995</h5>
                        </div>
                        <p>
                          Ranked among the top ten Pakistan insurers in terms of
                          gross premium, Askari General Insurance Company
                          Limited holds a position in the local insurance
                          industry as a reliable and loyal partner.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div
                  class="tab-pane fade"
                  id="ex1-tabs-7"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-7"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Askari Guards Private Limited</h3>
                          <h5> 1996 </h5>
                        </div>
                        <p>
                          Askari Guards Private Limited is rising as a
                          well-recognized provider of guarding services
                          throughout Pakistan and offering holistic security to
                          both national and international companies.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3>
                            {" "}
                            Mal Pakistan Limited (Mobil Askari Lubricants
                            Pakistan Ltd.)
                          </h3>
                          <h5> 1996</h5>
                        </div>
                        <p>
                          Mal Pakistan Limited is a state-of-the-art oil
                          lubricant company established by a strategic
                          partnership with the Largest oil company Mobil
                          Lubricants.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
                <div
                  class="tab-pane fade"
                  id="ex1-tabs-8"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-8"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Askari Fuels</h3>
                          <h5> 2002</h5>
                        </div>
                        <p>
                          Askari Fuels has become a giant system comprising 30
                          CNG stations spanning all over Pakistan.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div
                  class="tab-pane fade"
                  id="ex1-tabs-9"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-9"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Askari Enterprises Pvt Ltd</h3>
                          <h5> 2009</h5>
                        </div>
                        <p>
                          Askari Enterprises Private Limited is a special unit
                          responsible for the distribution of weapons,
                          ammunition, vehicles, and additional equipment.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div
                  class="tab-pane fade"
                  id="ex1-tabs-10"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-10"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Fauji Security Services Pvt Ltd</h3>
                          <h5> 2014</h5>
                        </div>
                        <p>
                          Fauji Security Services Private Limited has the best
                          reputation as a security company in Pakistan.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div
                  class="tab-pane fade"
                  id="ex1-tabs-11"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-11"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Askari Development Holdings Private Limited</h3>
                          <h5> 2015</h5>
                        </div>
                        <p>
                          Askari Development Holdings Private Limited is a 100%
                          owned business unit of AWT.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div
                  class="tab-pane fade"
                  id="ex1-tabs-12"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-12"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3>
                            {" "}
                            AWT Investments Limited (Non-Banking Finance
                            Company)
                          </h3>
                          <h5> 2017</h5>
                        </div>
                        <p>
                          Licensed by the Securities and Exchange Commission of
                          Pakistan, AWT Investments Limited oversees the
                          management of open and closed-end funds.
                        </p>
                      </div>
                    </div>

                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Medask</h3>
                          <h5> 2017</h5>
                        </div>
                        <p>
                          MedAsk by Pakistan Army is the leading healthcare
                          provider serving its Army personnel and their
                          families.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div
                  class="tab-pane fade"
                  id="ex1-tabs-13"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-13"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Askari Life Insurance Company Limited</h3>
                          <h5> 2018</h5>
                        </div>
                        <p>
                          Askari Life Insurance Company Limited has a current
                          capital of Rs. 750 million. Their shares are publicly
                          listed on the Pakistan Stock Exchange.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>

                <div
                  class="tab-pane fade"
                  id="ex1-tabs-14"
                  role="tabpanel"
                  aria-labelledby="ex1-tab-14"
                >
                  <Slider {...settings}>
                    <div>
                      <div className="mainoutertabsscontent">
                        <div className="headingwithyear">
                          <h3> Jolidays</h3>
                          <h5> 2020</h5>
                        </div>
                        <p>
                          Jolidays is dedicated to providing quality travel
                          arrangements to its clients that make their experience
                          a true value for money.
                        </p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutusbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="aboutus">
                <span className="linesheading"> Insights About Our </span>
                <h2> Corporate Journey 2022</h2>
                <p>
                  From healthcare initiatives to sustainable development
                  projects, the Army Welfare Trust accomplished significant
                  milestones. 2022 proved to be a year of impressive advancement
                  for the Army Welfare Trust.
                </p>

                <p>
                  {" "}
                  Get a complete picture of the events from our Corporate
                  Profile 2022. Enter your email address to download it now!
                </p>
              </div>
            </div>
          </div>

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
          </div>
        </div>
      </section>

      <section className="spaceupdowngray">
        <div className="container-fluid overflow-hidden no-gutters p-0">
          <div className="row">
            <Slider {...settingsllogo}>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust1} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust2} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trsut6} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust2} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust1} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" />{" "}
                </div>
              </div>

              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trsut6} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust2} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust1} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" />{" "}
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};
export default AboutUs;
