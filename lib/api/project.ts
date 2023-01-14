import fetcher from "./fetcher";

export const createProject = async (project = {}) => {
  return fetcher({
    url: "/api/project",
    method: "POST",
    body: project,
    json: false,
  });
};
