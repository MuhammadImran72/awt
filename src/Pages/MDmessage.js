import mdmessage from "../assets/MDmessage/mdmessageperson.png";
import stars from "../assets/MDmessage/mdstars.png";
import Slider from "react-slick";
import trust1 from "../assets/contactus/trust1.png";
import trust2 from "../assets/contactus/trust2.png";
import trust3 from "../assets/contactus/trust3.png";
import trust4 from "../assets/contactus/trust4.png";
import trust5 from "../assets/contactus/trsut5.png";
import trsut6 from "../assets/contactus/trust6.png";
const MDmessage = () => {
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
                  {" "}
                  MD <span>MESSAGE </span>{" "}
                </h1>

                <h5>
                  Home | <span>MD's Message </span>{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutusbox">
        <div className="container">
          <div className="row d-flex justify-content-start align-items-center">
            <div className="col-lg-8">
              <div className="ourmission mdmessage">
                <div className="starimgebox">
                  <img src={stars} className="img-fluid" alt="" />
                </div>

                <span className="leftlineheading">
                  {" "}
                  MANAGING DIRECTOR's COMMUNIQUE{" "}
                </span>
                <h2>Lt Gen Naveed Mukhtar HI (M) (Retd)</h2>
                <p>
                  It is a great honor to take over as Managing Director of Army
                  Welfare Trust. My motivation to join AWT lies in the
                  distinction that this organization holds in providing a
                  platform for the welfare and wellbeing of our troops and the
                  wards of our Shuhada. Allah has bestowed upon me this
                  privilege for which I seek His guidance and assistance so that
                  I may fulfill my responsibility to the best of my abilities. I
                  will do my utmost to uphold the trust and confidence reposed
                  in me. lnshAIIah, you can expect an absolute merit-based
                  approach and an atmosphere of complete professionalism.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="mdmessagepersonimages">
                <img src={mdmessage} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ourmission">
                <p>
                  To lay the groundwork for our next leap, I expect my team to
                  make a dedicated effort in creating a conducive environment
                  for substantial business growth, and generate a healthy
                  culture based on integrity, trust, credibility and shared
                  success. With collective wisdom, institutional approach and
                  creativity, we can steer this organization towards a much
                  brighter and promising future.
                </p>

                <p>
                  {" "}
                  Let us devote all our mental and physical energies in the
                  pursuit of excellence. I am confident that with the blessings
                  of Allah and with our will and hard work, together we shall
                  realize our vision, lnshAIIah.
                </p>

                <p>May Allah be our Helper, Protector and Guide, Ameen.</p>
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
                  <img src={trust1} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust2} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trsut6} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust2} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust1} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" alt="" />{" "}
                </div>
              </div>

              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trsut6} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust3} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust2} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust1} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust4} className="img-fluid" alt="" />{" "}
                </div>
              </div>
              <div>
                <div className="trsutimages">
                  {" "}
                  <img src={trust5} className="img-fluid" alt="" />{" "}
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MDmessage;
