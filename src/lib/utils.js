import axios from "axios";
import qs from "qs";

export function flattenAttributes(data) {
  if (
    typeof data !== "object" ||
    data === null ||
    data instanceof Date ||
    typeof data === "function"
  ) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item));
  }

  let flattened = {};

  for (let key in data) {
    if (!data.hasOwnProperty(key)) continue;

    if (
      (key === "attributes" || key === "data") &&
      typeof data[key] === "object" &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}

const strapiBaseUrl = process.env.REACT_APP_STRAPI_URL;

export function getStrapiURL(path = "") {
  return `${strapiBaseUrl}${path}`;
}

export function strapiUrl() {
  return strapiBaseUrl;
}

export async function fetchStrapiData(url, params = {}) {
  try {
    const queryString = qs.stringify(params, { encode: false });
    const response = await axios.get(`${url}?${queryString}`);
    return flattenAttributes(response.data.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
