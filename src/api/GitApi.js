import { Octokit } from "@octokit/core";
import { token } from "../config_data/config_data";

export const searchRepos = async function searchRepos(query = "") {
  const encodedQuery = encodeURIComponent(query);
  const octokit = new Octokit({
    auth: token,
  });

  const repsonse = await octokit.request("GET /search/repositories", {
    q: encodedQuery,
  });
};
