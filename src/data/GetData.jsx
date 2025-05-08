import { useQuery } from "@tanstack/react-query";
import { getStrapiURL, fetchStrapiData } from "../lib/utils";

const fetchStrapi = async (endpoint, params = {}) => {
  const url = getStrapiURL(endpoint);
  return await fetchStrapiData(url, params);
};

const useStrapiQueryHandler = (queryKey, endpoint, params = {}) => {
  const { data, error, isPending } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchStrapi(endpoint, params),
  });

  return { data, isPending, error };
};

//Strapi api
export const GetHeaderData = () => {
  const params = {
    populate: {
      Image: {
        fields: ["url", "alternativeText", "name"],
      },
    },
  };

  return useStrapiQueryHandler("header", "/api/homepages", params);
};

export const BusinessUnitDataBySlug = (slug) => {
  const params = {
    populate: {
      Partners: {
        populate: {
          Partner: {
            populate: {
              Title: true,
              Description: true,
              Image: {
                fields: ["name", "url", "alternativeText"],
              },
            },
          },
        },
      },
      Services: {
        populate: {
          Service: {
            populate: {
              Title: true,
              Description: true,
              Image: {
                fields: ["name", "url", "alternativeText"],
              },
            },
          },
        },
      },
      CardImage: { fields: ["name", "url", "alternativeText"] },
      BannerImage: { fields: ["name", "url", "alternativeText"] },
      Image1: { fields: ["name", "url", "alternativeText"] },
      Image2: { fields: ["name", "url", "alternativeText"] },
      contact: { populate: true },
    },
  };

  return useStrapiQueryHandler(
    `${slug}`,
    `/api/business-units/${slug}`,
    params
  );
};

export const BusinessUnitsData = () => {
  const params = {
    populate: {
      CardImage: { fields: ["name", "url", "alternativeText"] },
    },
  };
  return useStrapiQueryHandler("business-units", "/api/business-units", params);
};

export const GetGalleryItems = () => {
  const params = {
    populate: {
      cover: { ields: ["name", "url", "alternativeText"] },
    },
  };
  return useStrapiQueryHandler("gallery-items", "/api/galleries", params);
};

export const GetGalleryItemsBySlug = (slug) => {
  const params = {
    populate: {
      cover: { fields: ["name", "url", "alternativeText"] },
      GalleryItems: { fields: ["name", "url", "alternativeText"] },
    },
  };
  return useStrapiQueryHandler("gallery", `/api/galleries/${slug}`, params);
};

export const GetResources = () => {
  const params = {
    populate: {
      Image: {
        fields: ["url", "alternativeText", "width", "height"],
      },
    },
    pagination: {
      pageSize: 45,
    },
    sort: ["createdAt:desc"],
  };

  return useStrapiQueryHandler("resources", "/api/resources", params);
};

export const GetTimelineData = () => {
  const params = {};

  return useStrapiQueryHandler(
    "about-timeline",
    "/api/about-timelines",
    params
  );
};

export const GetMdMessage = () => {
  const params = {
    populate: {
      Image: {
        fields: ["url", "alternativeText", "width", "height"],
      },
    },
  };

  return useStrapiQueryHandler("md-message", "/api/md-message", params);
};

export const GetBods = () => {
  const params = {
    populate: {
      Image: {
        fields: ["url", "alternativeText", "width", "height"],
      },
    },
  };

  return useStrapiQueryHandler("bods", "/api/bods", params);
};

export const GetUnitsContactInfo = () => {
  const params = {};

  return useStrapiQueryHandler("contact-info", "/api/contact-infos", params);
};

export const GetCorporateProfile = () => {
  const params = {
    populate: {
      CorporateProfile: { fields: ["name", "url", "alternativeText"] },
    },
  };

  return useStrapiQueryHandler(
    "corporate-profile",
    "/api/corporate-profile",
    params
  );
};

export const GetNewsletter = () => {
  const params = {
    populate: {
      CoverImage: { fields: ["name", "url", "alternativeText"] },
    },
    sort: ["createdAt:desc"],
  };
  return useStrapiQueryHandler("newsletters", "/api/newsletters", params);
};

export const GetNewsletterBySlug = (slug) => {
  const params = {
    populate: {
      CoverImage: { fields: ["name", "url", "alternativeText"] },
      Pages: { fields: ["name", "url", "alternativeText"] },
    },
  };
  return useStrapiQueryHandler(
    `${slug}-newsletter`,
    `/api/newsletters/${slug}`,
    params
  );
};
