import "./cost.css";
import { Link } from "react-router-dom";

export default function Cost({ cost }) {
  return (
    <div className="cost">
      <div>
        <span>User: </span>
        {cost.username}
      </div>
      <div>
        <span>Category: </span>
        {cost.category}
      </div>
      <div>
        <span>Description: </span>
        {cost.description}
      </div>
      <div>
        <span>Date: </span>
        {new Date(cost.createdAt).toDateString()}
      </div>
      <div>
        <span>Sum: </span>
        {cost.sum}
      </div>
      <hr />
      <div className="btnCost">
        <Link to={`/cost/${cost._id}`} className="link">
          צפה בפעולה
        </Link>
      </div>
    </div>
  );
}
