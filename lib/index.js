import { directus, handleAsyncError } from "./utils";

export const userLogin = async (payload) => {
  try {
    const res = await directus.auth.login(payload);
    return [res, null];
  } catch (error) {
    return handleAsyncError(error);
  }
};

export const userLogout = async () => {
  try {
    await directus.auth.logout();

    return ["logout successful", null];
  } catch (error) {
    return handleAsyncError(error);
  }
};

export const getAuthInfo = async () => {
  try {
    const res = await directus.users.me.read({
      fields: "id,email,role.id,role.name",
    });

    return [res, null];
  } catch (error) {
    return handleAsyncError(error);
  }
};
