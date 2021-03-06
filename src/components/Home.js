import React, { useState } from "react";
import "../styles/Home.css";
import { searchRepos } from "../api/GitApi";
import SearchBox from "./SearchBox";
import RepoList from "./RepoList";

function Home() {
  const [sort, setSort] = useState("Best Match");
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);

  async function searchHandler() {
    const response = await searchRepos(query, sort);
    setRepos(response.data);
  }

  return (
    <div className="Home">
      <SearchBox
        setSort={setSort}
        setQuery={setQuery}
        searchHandler={searchHandler}
      />
      <RepoList repos={repos} />
    </div>
  );
}

export default Home;
