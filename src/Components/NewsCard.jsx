import React from "react";
import { Card } from "react-bootstrap";
import { getStrapiURL } from "../lib/utils";

const NewsCard = ({ cardData }) => {
  const strapiURL = getStrapiURL();
  return (
    <Card className="resource-card shadow-none p-0 border-0 overflow-hidden rounded-2">
      <img
        src={`${strapiURL}${cardData.Image.url}`}
        alt={cardData.Image.alternativeText}
        class="card-img-top rounded-2 w-100 object-fit-cover"
        loading="lazy"
        width={cardData.Image.width}
        height={cardData.Image.height}
      />

      <div
        class="card-body h-100"
        style={{
          background: "rgba(250, 250, 250, 1)",
        }}
      >
        <h2 class="card-title fs-4 pb-2">{cardData.Title}</h2>
        <a href="/news" class="btn btn-primary">
          View More
        </a>
      </div>
    </Card>
  );
};

export default NewsCard;
