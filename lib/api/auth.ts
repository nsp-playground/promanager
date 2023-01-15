import fetcher from "./fetcher";

export const signup = async (user = {}) => {
  return fetcher({
    url: "/api/signup",
    method: "POST",
    body: user,
    json: false,
  });
};

export const signin = (user = {}) => {
  return fetcher({
    url: "/api/signin",
    method: "POST",
    body: user,
    json: false,
  });
};

export const logout = () => {
  return fetcher({
    url: "/api/logout",
    method: "POST",
    json: false,
  });
};
