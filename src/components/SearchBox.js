import { Button, Form } from "react-bootstrap";
import "../styles/SearchBox.css";

function SearchBox(props) {
  const { setSort, setQuery, searchHandler } = props;

  return (
    <div className="SearchBox">
      <div className="SearchForm">
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              defaultValue="Best Match"
              onChange={(e) => setSort(e.target.value)}
            >
              <option>Best Match</option>
              <option>Stars</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>

      <div className="SearchButton">
        <Button variant="outline-primary" onClick={() => searchHandler()}>
          Go
        </Button>
      </div>
    </div>
  );
}

export default SearchBox;
