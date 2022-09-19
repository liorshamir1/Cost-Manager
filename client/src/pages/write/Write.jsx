import { useContext, useState } from "react";
import "./write.css";
import { axiosInstance } from "../../config";
import { Context } from "../../context/Context";
import CustomPopUp from "./../popup/CustomPopUp";

export default function Write() {
  const [sum, setSum] = useState(0);
  const [description, setDesc] = useState("");
  const [category, setcategory] = useState("");
  const { user } = useContext(Context);
  const [success, setSuccess] = useState(false);
  const [bodyPopUp, setbodyPopUp] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newcost = {
      username: user.username,
      category,
      sum,
      description,
    };
    try {
      const res = await axiosInstance.post("/costs", newcost);
      setbodyPopUp("הפעולה נכנסה לסך ההוצאות שלך");
      setSuccess(true);
      document.getElementById("Category").value = "";
      document.getElementById("Sum").value = "";
      document.getElementById("Description").value = "";
      // window.location.replace("/cost/" + res.data._id);
    } catch (err) {
      setbodyPopUp("יש למלא את כל השדות");
      setSuccess(true);
    }
  };
  return (
    <div className="container-fluid">
      <div className="write">
        <span className="writeTitle">Add new cost</span>
        <form className="writeForm" onSubmit={handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <input
              type="text"
              placeholder="Category"
              id="Category"
              className="writeInput"
              autoFocus={true}
              onChange={(e) => setcategory(e.target.value)}
            />
            <input
              type="number"
              placeholder="Sum"
              id="Sum"
              className="writeInput"
              autoFocus={true}
              onChange={(e) => setSum(e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              id="Description"
              className="writeInput"
              autoFocus={true}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <button className="writeSubmit" type="submit">
            Add to list
          </button>
        </form>
        {success && (
          <CustomPopUp
            title={"הודעת מערכת"}
            body={bodyPopUp}
            show={success}
            setShow={setSuccess}
          />
        )}
      </div>
    </div>
  );
}
