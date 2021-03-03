import { Octokit } from "@octokit/core";
import { token } from "../config_data/config_data";

export const searchRepos = async function searchRepos(
  query = "",
  sort = "",
  language = ""
) {
  const octokit = new Octokit({
    auth: token,
  });
  const encodedLanguage = language
    ? "language:" + encodeURIComponent(language)
    : "";
  const encodedQuery = encodeURIComponent(query) + " + " + encodedLanguage;
  const response = await octokit.request("GET /search/repositories", {
    q: encodedQuery,
    sort: sort,
  });

  console.log(response);

  return response;
};
