import React from "react";
import { getStrapiURL } from "../lib/utils";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";

// Import LightGallery CSS
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";

const LighthouseGallery = ({ galleryItems }) => {
  const baseurl = getStrapiURL();

  if (!galleryItems || galleryItems.length === 0) return null;

  return (
    <LightGallery plugins={[lgThumbnail]} speed={500}>
      {galleryItems.map((galleryItem) => (
        <a
          href={baseurl + galleryItem.url}
          data-src={baseurl + galleryItem.url}
          data-lg-size={`${galleryItem.width}-${galleryItem.height}`}
        >
          <img
            src={baseurl + galleryItem.url}
            alt={galleryItem.alternativeText || ""}
            className="w-100 gallery-thumbnail rounded-2"
            loading="lazy"
            width={galleryItem.width}
            height={galleryItem.height}
          />
        </a>
      ))}
    </LightGallery>
  );
};

export default LighthouseGallery;
