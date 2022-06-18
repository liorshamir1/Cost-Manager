import Cost from "../cost/Cost";
import "./costs.css";

export default function Costs({ costs }) {
  return (
    <div className="costs">
      {costs.map((p) => (
        <Cost cost={p} />
      ))}
    </div>
  );
}