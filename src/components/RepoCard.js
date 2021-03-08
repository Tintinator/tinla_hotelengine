import { Card } from "react-bootstrap";

function RepoCard(props) {
  const { repo } = props;
  const {
    full_name,
    id,
    html_url,
    forks_count,
    stargazers_count,
    open_issues_count,
    watchers_count,
  } = repo;

  return (
    <Card large>
      <Card.Body>
        <Card.Title>
          <a href={html_url}>
            {full_name} ({id})
          </a>
        </Card.Title>
        <Card.Text>
          <ul>
            <li>Forks: {forks_count}</li>
            <li>Stars: {stargazers_count}</li>
            <li>Watchers: {watchers_count}</li>
            <li>Issues: {open_issues_count}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RepoCard;
