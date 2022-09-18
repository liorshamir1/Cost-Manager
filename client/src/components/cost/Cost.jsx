import "./cost.css";
import { Link } from "react-router-dom";

export default function Cost({ cost }) {
  return (
    <div className="cost">
      <Link to={`/cost/${cost._id}`} className="link">
        <p>Description:</p>
        <span> {cost.description}</span>
      </Link>
      <span>{new Date(cost.createdAt).toDateString()}</span>
      <p className="reportForm">User: </p>
      <span>{cost.username}</span>
      <p>Category: </p>
      <span>{cost.category}</span>
      <p>Sum: </p>
      <span>{cost.sum}</span>
      <Link to={`/cost/${cost._id}`} className="link">
        צפה בפעולה
      </Link>
      <hr />
    </div>
  );
}
