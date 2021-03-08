import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import "../styles/RepoList.css";

function RepoList(props) {
  const { repos } = props;
  const rows = repos.map((e) => {
    const { id, full_name, size, stargazers_count, language } = e;
    return (
      <tr key={id}>
        <td>
          <Link
            to={{
              pathname: "/details",
              state: { repoDetail: e },
            }}
          >
            {id}
          </Link>
        </td>
        <td>{full_name}</td>
        <td>{size}</td>
        <td>{stargazers_count}</td>
        <td>{language}</td>
      </tr>
    );
  });

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Size</th>
            <th>Stars</th>
            <th>Language</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default RepoList;
