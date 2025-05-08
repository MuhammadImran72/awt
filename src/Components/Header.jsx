import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import mainlogo from "../assets/footerlogonew.png";
import MegaMenu from "./MegaMenu";
import { FaBars, FaChevronDown } from "react-icons/fa6";
import { BusinessUnitsData } from "../data/GetData";
import LoadingSpinner from "./LoadingSpinner";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import BodsDropdownMenu from "./BodDropdownMenu";
import MediaDropdownMenu from "./MediaDropdownMenu";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  //Close nav when link is clicked
  const handleNavCollapse = () => setIsNavCollapsed((prevState) => !prevState);
  const closeNav = () => {
    setIsNavCollapsed(true);
  };
  return (
    <>
      <section className="mainmenu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-ms-12">
              <Navbar expand="lg" className="justify-content-center">
                <Container className="px-0 mx-0">
                  <Navbar.Brand>
                    <Link to="/">
                      <img
                        src={mainlogo}
                        alt="AWT"
                        style={{
                          maxWidth: "80px",
                        }}
                      />
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls="basic-navbar-nav border-white"
                    onClick={handleNavCollapse}
                  >
                    <FaBars className="text-white" />
                  </Navbar.Toggle>
                  <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                    in={!isNavCollapsed}
                  >
                    <Nav className="position-relative gap-3 gap-lg-0">
                      <Link className="navmenu-link" to="/" onClick={closeNav}>
                        Home
                      </Link>
                      <Link
                        className="navmenu-link"
                        to="/aboutus"
                        onClick={closeNav}
                      >
                        About Us
                      </Link>
                      <MegaMenu />
                      <MobileMenu closeNav={closeNav} />
                      <Link
                        className="navmenu-link"
                        to="/mdmessage"
                        onClick={closeNav}
                      >
                        MD’s Message
                      </Link>

                      <BodDropdownMenu closeNav={closeNav} />

                      <Link
                        className="navmenu-link"
                        to="/news"
                        onClick={closeNav}
                      >
                        News
                      </Link>
                      <Link
                        className="navmenu-link"
                        to="https://jobs.awt.com.pk/"
                        target="_blank"
                        onClick={closeNav}
                      >
                        Careers
                      </Link>

                      <MediaMenu closeNav={closeNav} />

                      <Link
                        className="navmenu-link"
                        to="/contactus"
                        onClick={closeNav}
                      >
                        Contact Us
                      </Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

//Business units mobile dropdown
const MobileMenu = ({ closeNav }) => {
  const { data, error, isPending } = BusinessUnitsData();
  if (error) return "An error occurred";
  if (isPending) return <LoadingSpinner />;

  const publicListedItems = data
    .filter((item) => item.WelfareUnit === "Public Listed Company")
    .sort((a, b) => a.Title.localeCompare(b.Title));
  const publicUnListedItems = data
    .filter((item) => item.WelfareUnit === "Public Unlisted Company")
    .sort((a, b) => a.Title.localeCompare(b.Title));
  const privateLimitedItems = data
    .filter((item) => item.WelfareUnit === "Private Limited Company")
    .sort((a, b) => a.Title.localeCompare(b.Title));
  const otherUnitItems = data
    .filter((item) => item.WelfareUnit === "Other Trust Unit")
    .sort((a, b) => a.Title.localeCompare(b.Title));

  return (
    <Dropdown className="d-block d-lg-none p-0">
      <Dropdown.Toggle className="border-0 bg-transparent text-white m-0 mx-auto d-flex align-items-center gap-3">
        Business Units <FaChevronDown className="text-white" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="bg-transparent border-0 p-2 my-0">
        {[
          { title: "Public Listed Companies", items: publicListedItems },
          { title: "Public Unlisted Companies", items: publicUnListedItems },
          { title: "Private Limited Companies", items: privateLimitedItems },
          { title: "Other Trust Units", items: otherUnitItems },
        ].map((category, index) => (
          <div key={index} className="my-2">
            <h5 className="text-white text-center">{category.title}</h5>
            {category.items.map((item) => (
              <Dropdown.Item
                key={item.id}
                href={`/business-units/${item.slug}`}
                className="text-white justify-content-center"
                onClick={closeNav}
              >
                {item.Title}
              </Dropdown.Item>
            ))}
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const MediaMenu = ({ closeNav }) => {
  const [mediaMenu, showMediaMenu] = useState(false);

  const handleItemClick = () => {
    closeNav();
    showMediaMenu(false);
  };

  return (
    <>
      <MediaDropdownMenu />

      {/* Mobile Media dropdown */}
      <Dropdown className="d-block d-lg-none p-0">
        <Dropdown.Toggle className="border-0 bg-transparent text-white m-0 mx-auto d-flex align-items-center gap-3">
          Media <FaChevronDown className="text-white" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="bg-transparent border-0 p-2 my-0">
          <div className="my-2">
            <Dropdown.Item
              href="/media"
              className="text-white justify-content-center"
              onClick={handleItemClick}
            >
              Media
            </Dropdown.Item>
          </div>
          <div className="my-2">
            <Dropdown.Item
              href="/newsletter"
              className="text-white justify-content-center"
              onClick={handleItemClick}
            >
              Newsletter
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

const BodDropdownMenu = ({ closeNav }) => {
  const [showBodsMenu, setShowBodsMenu] = useState(false);

  const handleItemClick = () => {
    closeNav();
    setShowBodsMenu(false);
  };

  return (
    <>
      <BodsDropdownMenu />

      {/* Mobile BODs dropdown */}
      <Dropdown className="d-block d-lg-none p-0">
        <Dropdown.Toggle className="border-0 bg-transparent text-white m-0 mx-auto d-flex align-items-center gap-3">
          BODs <FaChevronDown className="text-white" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="bg-transparent border-0 p-2 my-0">
          <div className="my-2">
            <Dropdown.Item
              href="/committeeofadministration"
              className="text-white justify-content-center"
              onClick={handleItemClick}
            >
              Committee of Administration
            </Dropdown.Item>
          </div>
          <div className="my-2">
            <Dropdown.Item
              href="/boardofdirector"
              className="text-white justify-content-center"
              onClick={handleItemClick}
            >
              Board of Director
            </Dropdown.Item>
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Header;
