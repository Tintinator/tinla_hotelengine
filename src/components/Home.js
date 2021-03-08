import React, { useState } from "react";
import { Form, Col } from "react-bootstrap";
import "../styles/Home.css";
import { searchRepos } from "../api/GitApi";
import SearchBox from "./SearchBox";
import RepoList from "./RepoList";

function Home() {
  const [sort, setSort] = useState("Best Match");
  const [query, setQuery] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [repos, setRepos] = useState([]);
  const filteredRepos = repos.items
    ? repos.items.filter(
        (e) => e.language && e.language.includes(languageFilter)
      )
    : [];

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
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="Filter Language..."
                onChange={(e) => setLanguageFilter(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
        </Form>
        <RepoList repos={filteredRepos} />
      </div>
    </div>
  );
}

export default Home;
