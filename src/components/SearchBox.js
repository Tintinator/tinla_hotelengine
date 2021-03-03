import { Button, Form, Row, Col } from "react-bootstrap";
import "../styles/SearchBox.css";

function SearchBox(props) {
  const { setSort, setQuery } = props;

  return (
    <div className="SearchBox">
      <div className="SearchForm">
        <Form>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search..."
              onChange={setQuery}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              as="select"
              defaultValue="Best Match"
              onChange={setSort}
            >
              <option>Best Match</option>
              <option>Stars</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>

      <div className="SearchButton">
        <Button variant="outline-primary">Go</Button>
      </div>
    </div>
  );
}

export default SearchBox;
