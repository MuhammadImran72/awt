import React from "react";

import { MdMailOutline } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GetUnitsContactInfo } from "../data/GetData";
import LoadingSpinner from "./LoadingSpinner";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const ContactInfoCard = () => {
  const { data, error, isPending } = GetUnitsContactInfo();

  if (isPending) return <LoadingSpinner />;
  if (error) return "An error occured!!!";

  return (
    <>
      {data.map((item) => (
        <motion.div
          className="contact-info-card shadowww-box d-flex flex-column gap-2 justify-content-between"
          key={item.id}
          variants={cardVariants}
        >
          <h3 className="text-center mb-3">{item.name}</h3>

          <ul className="info-card-list p-0">
            <li className="info-card-list-item borderr-box d-flex align-items-md-center align-items-start gap-4 justify-content-start flex-column flex-md-row">
              <span>
                <FaPhone />
              </span>
              <div className="d-flex flex-column gap-1">
                <strong>Phone:</strong>
                <a href={`tel:${item.phone}`}>{item.phone}</a>
              </div>
            </li>
            <li className="info-card-list-item borderr-box d-flex align-items-md-center align-items-start gap-4 justify-content-start flex-column flex-md-row">
              <span>
                <MdMailOutline />
              </span>
              <div className="d-flex flex-column gap-1">
                <strong>Email:</strong>
                <a href={`mailto:${item.email}`}>{item.email}</a>
              </div>
            </li>
            <li className="info-card-list-item borderr-box d-flex align-items-md-center align-items-start gap-4 justify-content-start flex-column flex-md-row">
              <span>
                <FaLocationDot />
              </span>
              <div className="d-flex flex-column gap-1">
                <strong>Address:</strong>
                <button className="link-button text-start">
                  {item.address}
                </button>
              </div>
            </li>
          </ul>
        </motion.div>
      ))}
    </>
  );
};

export default ContactInfoCard;
