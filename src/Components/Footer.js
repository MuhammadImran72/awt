import footerlogo from "../assets/footerlogonew.png";

const Footer = () => {
  return (
    <div>
      <section id="footerbox">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-logo">
                <img src={footerlogo} className="img-fluid" />
                <p>
                  With 53 years of dedicated investments in the industries, the
                  Army Welfare Trust generates maximum funds for soldiers’
                  well-being and contributes to Pakistan’s economic growth.
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="getintouch ">
                <h3> Business Units</h3>
                <ul>
                  <li>
                    <a>Askari Fuels </a>
                  </li>
                  <li>
                    <a>Mal Pakistan Limited </a>
                  </li>
                  <li>
                    <a>Askari Real Estate </a>
                  </li>

                  <li>
                    <a>MedAsk </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="getintouch">
                <h3> Get in Touch</h3>
                <ul>
                  <li>
                    {" "}
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <a>ARMY WELFARE TRUST. AWT Plaza The Mall Rawalpindi</a>
                  </li>
                  <li>
                    {" "}
                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    <a href="mailto:infoawt@awt.com.pk"> infoawt@awt.com.pk</a>
                  </li>
                  <li>
                    <i class="fa fa-phone" aria-hidden="true"></i>

                    <a href="tel:92-51-9272400-4"> 92-51-9272400-4</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="footerform">
                <h3 className="text-white">Join Our Newsletter</h3>
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Your Email</label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter Your Email"
                    />
                  </div>

                  <button type="submit" className="subscribebtns">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center ">
              <div className="bottomlinee">
                <p>All Rights Reserved By CXS-2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
