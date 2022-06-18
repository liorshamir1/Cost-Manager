import "./settings.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";

export default function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [marital_status, setmarital_status] = useState("");
  const [birthday, setbirthday] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    try {
      const res = await axiosInstance.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>first_name</label>
          <input
            type="first_name"
            placeholder={user.first_name}
            onChange={(e) => setfirst_name(e.target.value)}
          />
          <label>last_name</label>
          <input
            type="last_name"
            placeholder={user.last_name}
            onChange={(e) => setlast_name(e.target.value)}
          />
          <label>marital_status</label>
          <input
            type="marital_status"
            placeholder={user.marital_status}
            onChange={(e) => setmarital_status(e.target.value)}
          />
          <label>birthday</label>
          <input
            type="date"
            placeholder={user.birthday}
            onChange={(e) => setbirthday(e.target.value)}
          />

          <button className="settingsSubmit" type="submit">
            Update
          </button>
          {success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>

    </div>
  );
}