import { Button, Form, Col } from "react-bootstrap";
import "../styles/SearchBox.css";

function SearchBox(props) {
  const { setSort, setQuery, searchHandler } = props;

  return (
    <div className="SearchBox">
      <Form>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Control
              type="text"
              placeholder="Search Repo..."
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control
              as="select"
              defaultValue="best match"
              onChange={(e) => setSort(e.target.value)}
            >
              <option>best match</option>
              <option>stars</option>
            </Form.Control>
          </Form.Group>
          <div>
            <Button variant="outline-primary" onClick={() => searchHandler()}>
              Go
            </Button>
          </div>
        </Form.Row>
      </Form>
    </div>
  );
}

export default SearchBox;
