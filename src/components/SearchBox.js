import { Button, Form, Col } from "react-bootstrap";
import "../styles/SearchBox.css";

function SearchBox(props) {
  const { setSort, setQuery, searchHandler } = props;

  return (
    <div className="SearchBox">
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Search: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Sort By: </Form.Label>
            <Form.Control
              as="select"
              defaultValue="Best Match"
              onChange={(e) => setSort(e.target.value)}
            >
              <option>Best Match</option>
              <option>Stars</option>
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Form>

      <Button variant="outline-primary" onClick={() => searchHandler()}>
        Go
      </Button>
    </div>
  );
}

export default SearchBox;
