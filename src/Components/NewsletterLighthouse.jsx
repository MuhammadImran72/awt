import React, { useRef } from "react";
import { getStrapiURL } from "../lib/utils";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Import LightGallery CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

const NewsletterLighthouse = ({ galleryItems }) => {
  const baseurl = getStrapiURL();
  const lightGalleryRef = useRef(null);

  if (!galleryItems || galleryItems.length === 0) return null;

  // Extract the first item
  const firstItem = galleryItems[0];

  // Function to trigger LightGallery manually
  const openGallery = () => {
    if (lightGalleryRef.current) {
      lightGalleryRef.current.openGallery(0); // Open the gallery starting from the first image
    }
  };
  return (
    <>
      <div
        onClick={openGallery}
        style={{ cursor: "pointer" }}
        className="d-flex justify-content-center align-item-center"
      >
        <img
          src={baseurl + firstItem.url}
          alt={firstItem.alternativeText || ""}
          className="gallery-thumbnail rounded-2"
          loading="lazy"
        />
      </div>

      <LightGallery
        onInit={(detail) => {
          lightGalleryRef.current = detail.instance;
        }}
        dynamic
        dynamicEl={galleryItems.map((item) => ({
          src: baseurl + item.url,
          thumb: baseurl + item.url,
          width: item.width,
          height: item.height,
          alt: item.alternativeText || "",
        }))}
        plugins={[lgThumbnail]}
        speed={500}
        style={{ display: "none" }}
      />
    </>
  );
};

export default NewsletterLighthouse;
