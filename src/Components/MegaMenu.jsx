import { Container, NavDropdown, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCaretRight } from "react-icons/fa";
import { BusinessUnitsData } from "../data/GetData";
import LoadingSpinner from "./LoadingSpinner";
import { FaChevronDown } from "react-icons/fa6";
import React, { useState } from "react";
const MegaMenu = () => {
  const { data, error, isPending } = BusinessUnitsData();
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleMegaMenuMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMegaMenuMouseLeave = () => {
    setShowMegaMenu(false);
  };

  if (error) return "An error occurred";
  if (isPending) return <LoadingSpinner />;

  const categorizeByWelfareUnit = (items) => {
    const categorized = items.reduce((acc, item) => {
      const category = item.WelfareUnit;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});

    // Sort each category's items alphabetically by the Title property after categorization
    Object.keys(categorized).forEach((category) => {
      categorized[category].sort((a, b) => a.Title.localeCompare(b.Title));
    });

    return categorized;
  };

  const categorizedData = categorizeByWelfareUnit(data);

  const renderCategory = (categoryName, items) => (
    <>
      <NavDropdown.Header>{categoryName}</NavDropdown.Header>
      {items.map((item) => (
        <NavDropdown.Item key={item.id} as="div">
          <FaCaretRight color="gray" />
          <Link
            onClick={() => setShowMegaMenu(false)}
            className="nav-link w-100"
            to={`/business-units/${item.slug}`}
          >
            {item.Title}
          </Link>
        </NavDropdown.Item>
      ))}
    </>
  );

  return (
    <NavDropdown
      id="megamenu"
      onMouseEnter={handleMegaMenuMouseEnter}
      onMouseLeave={handleMegaMenuMouseLeave}
      show={showMegaMenu}
      className="p-0 d-none d-lg-block"
      title={
        <span className="d-flex gap-2 align-items-center navmenu-link">
          Business Units {"  "} <FaChevronDown className="text-white" />
        </span>
      }
    >
      <Container className="mega-menu">
        <Row className="justify-content-center">
          <Col className="text-left">
            {renderCategory(
              "Public Listed Companies",
              categorizedData["Public Listed Company"] || []
            )}
            <NavDropdown.Divider />
          </Col>
          <Col className="text-left">
            {renderCategory(
              "Public Unlisted Companies",
              categorizedData["Public Unlisted Company"] || []
            )}
            <NavDropdown.Divider />
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col className="text-left">
            {renderCategory(
              "Private Limited Companies",
              categorizedData["Private Limited Company"] || []
            )}
          </Col>
          <Col className="text-left">
            {renderCategory(
              "Other Trust Units",
              categorizedData["Other Trust Unit"] || []
            )}
          </Col>
        </Row>
      </Container>
    </NavDropdown>
  );
};

export default MegaMenu;
