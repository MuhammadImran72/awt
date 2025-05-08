import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BodsDropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  return (
    <div
      className="bods_dropdown d-none d-lg-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={toggleDropdown}
        className="border-0 bg-transparent navmenu-link text-white m-0 mx-auto d-flex align-items-center gap-2"
      >
        BODs <FaChevronDown className="text-white" />
      </button>
      {isOpen && (
        <div className="bods_dropdown-menu">
          <Link to="/committeeofadministration">
            Committee of Administration
          </Link>
          <Link to="/boardofdirector">Board of Director </Link>
        </div>
      )}
    </div>
  );
};

export default BodsDropdownMenu;
