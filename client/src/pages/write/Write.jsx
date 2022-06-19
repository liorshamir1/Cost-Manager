import { useContext, useState } from "react";
import "./write.css";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";


export default function Write() {
  const [sum, setSum] = useState(0);
  const [description, setDesc] = useState("");
  const [category, setcategory] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newcost = {
      username: user.username,
      sum,
      description,
      category
    };
    try {
      const res = await axiosInstance.post("/costs", newcost);
      window.location.replace("/cost/" + res.data._id);
    } catch (err) {
      window.alert("you need to add: sum ,description");
    }
  };
  return (
    <div className="container-fluid">
      <div className="write">
        <form className="writeForm" onSubmit={handleSubmit}>
          <div style={{ textAlign: 'center' }}>
            <input
              type="number"
              placeholder="sum"
              className="writeInput"
              autoFocus={true}
              onChange={e => setSum(e.target.value)}
            />

            <input
              type="text"
              placeholder="description"
              className="writeInput"
              autoFocus={true}
              onChange={e => setDesc(e.target.value)}
            />
            <input
              type="text"
              placeholder="category"
              className="writeInput"
              autoFocus={true}
              onChange={e => setcategory(e.target.value)}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </form>
      </div></div>
  );
}