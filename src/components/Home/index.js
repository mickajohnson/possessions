import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Link to="/create">Create Game</Link>
      <Link to="/join">Join Game</Link>
    </div>
  );
}
