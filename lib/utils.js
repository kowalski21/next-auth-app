import { Directus } from "@directus/sdk";

export const directus = new Directus("http://localhost:8055");

export const handleAsyncError = (errorObj) => {
  let { errors } = errorObj;

  if (errors.length > 0) {
    let message = errors[0].message;

    return [null, message];
  } else {
    return [null, "error connecting to server, try again"];
  }
};
