import { axiosInstance } from "../../config";
import { useState } from "react";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [marital_status, setmarital_status] = useState("");
  const [birthday, setbirthday] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
        first_name,
        last_name,
        marital_status,
        birthday,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>first Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your first name"
          onChange={(e) => setfirst_name(e.target.value)}
        />
        <label>Last Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your last name"
          onChange={(e) => setlast_name(e.target.value)}
        />
        <label>Marital Status</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your marital status"
          onChange={(e) => setmarital_status(e.target.value)}
        />
        <label>Date Of Birth</label>
        <input
          type="Date"
          className="registerInput"
          placeholder="Enter your birthday"
          onChange={(e) => setbirthday(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
