import "./cost.css";
import { Link } from "react-router-dom";

export default function Cost({ cost }) {
  return (
    <div className="cost">

    <Link to={`/cost/${cost._id}`} className="link">
      <span className="costTitle">{cost.description}</span>
    </Link>
    <span >
      <br></br>
      {new Date(cost.createdAt).toDateString()}
    </span>
    <p>user: {cost.username}</p><br></br>
    <p>category: {cost.category}</p><br></br>
    <p>sum: {cost.sum}</p><br></br>
    <Link to={`/cost/${cost._id}`} className="link">
    צפה בפעולה
    </Link>
    <hr /></div>
  );
}