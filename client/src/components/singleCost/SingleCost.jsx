import {axiosInstance} from "../../config";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singleCost.css";

export default function SingleCost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [cost, setCost] = useState({});
  const { user } = useContext(Context);
  const [sum, setSum] = useState(0);
  const [description, setdescription] = useState("");
  const [category, setcategory] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getCost = async () => {
      const res = await axiosInstance.get("/costs/" + path);
      setCost(res.data);
      setSum(res.data.sum);
      setdescription(res.data.description);
      setcategory(res.data.category);
    };
    getCost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/costs/${cost._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/costs/${cost._id}`, {
        username: user.username,
        description,
        sum,
        category
      });
      setUpdateMode(false)
    } catch (err) {}
  };

  return (
    <div className="singleCost">
      <div className="singleCostWrapper">
        {updateMode ? (
          <input
            type="number"
            value={sum}
            className="singleCostsumInput"
            autoFocus
            onChange={(e) => setSum(e.target.value)}
          />
        ) : (
          <h1 className="singleCostTitle">
            {sum}
            {cost.username === user?.username && (
              <div className="singleCostEdit">
                <i
                  className="singleCostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className="singleCostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className="singleCostInfo">
          <span className="singleCostAuthor">
            Author:
            <Link to={`/?users=${cost.username}`} className="link">
              <b> {cost.username}</b>
            </Link>
          </span>
          <span className="singleCostDate">
            {new Date(cost.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
           <input
           type="text"
           value={description}
           className="singleCostdescriptionInput"
           autoFocus
           onChange={(e) => setdescription(e.target.value)}
         />
         
        ) : (
          <p className="singleCostdescription">{description}</p>
        )}
        {updateMode && (
          <button className="singleCostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}