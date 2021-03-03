import React, { useState } from "react";
import "../styles/App.css";
import SearchBox from "./SearchBox";
import { searchRepos } from "../api/GitApi";

function App() {
  const [sort, setSort] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <SearchBox setSort={setSort} setQuery={setQuery} />
      {/* <RepoList /> */}
    </div>
  );
}

export default App;
