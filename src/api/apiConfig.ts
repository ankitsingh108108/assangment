const baseUrl = "http://3.109.184.247:3000";

const apiVersion = "/api/v1";
const defaultUrl = `${baseUrl}${apiVersion}`;
const commonHeader = {
  "Content-Type": "application/json",
};

const authenticatedHeader = (token?: string) => {
  return token
    ? {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    : {
        "Content-Type": "application/json",
      };
};
const apiconfig = {
  baseUrl,
  defaultUrl,
  commonHeader,
  authenticatedHeader,
  login: "/auth/login",
};
export default apiconfig;
