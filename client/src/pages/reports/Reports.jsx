import { useContext, useState } from "react";
import Costs from "../../components/costs/Costs";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

export default function Reports() {
  const { user } = useContext(Context);
  const [costs, setCosts] = useState([]);
  const [sum, setSum] = useState();
  const [category, setcategory] = useState("");
  const [year, setyear] = useState("");
  const [month, setmonth] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(month);
    var res = await axiosInstance.get(
      `/costs?user=${user.username}&category=${category}&month=${month}&year=${year}`
    );
    setSum(res.data.sum);
    setCosts(res.data.costs);
  };

  return (
    <div className="home">
      <Costs costs={costs} />
      <div>TOTAL COSTS :{sum}</div>
      <form className="settingsForm" onSubmit={handleSubmit}>
        <label>category</label>
        <input type="category" onChange={(e) => setcategory(e.target.value)} />
        <label>year</label>
        <input type="date.year" onChange={(e) => setyear(e.target.value)} />
        <label>month</label>
        <select id="drp1" onChange={(e) => setmonth(e.target.value)}>
          <option value="Jan">January</option>
          <option value="Feb">February</option>
          <option value="Mar">March</option>
          <option value="Apr">April</option>
          <option value="May">May</option>
          <option value="Jun">June</option>
          <option value="Jul">July</option>
          <option value="Aug">August</option>
          <option value="Sep">September</option>
          <option value="Oct">October</option>
          <option value="Nov">November</option>
          <option value="Dec">December</option>
        </select>
        <button className="settingsSubmit" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}
