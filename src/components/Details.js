import RepoCard from "../components/RepoCard";
import "../styles/Details.css";

function Details(props) {
  const { repo } = props.location.state;

  return (
    <div className="Details">
      <RepoCard repo={repo} />
    </div>
  );
}

export default Details;
