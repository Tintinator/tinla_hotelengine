import React, { useState } from "react";
import "../styles/App.css";
import { searchRepos } from "../api/GitApi";
import SearchBox from "./SearchBox";
import RepoList from "./RepoList";

function App() {
  const [sort, setSort] = useState("Best Match");
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);

  async function searchHandler() {
    const response = await searchRepos(query, sort);
    setRepos(response.data);
  }

  return (
    <div className="App">
      <SearchBox
        setSort={setSort}
        setQuery={setQuery}
        searchHandler={searchHandler}
      />
      <RepoList repos={repos} />
    </div>
  );
}

export default App;
