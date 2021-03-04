import React, { useState } from "react";
import "../styles/App.css";
import SearchBox from "./SearchBox";
import { searchRepos } from "../api/GitApi";

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
      {/* <RepoList /> */}
    </div>
  );
}

export default App;
