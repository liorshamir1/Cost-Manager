import { axiosInstance } from "../../config";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import CustomPopUp from "./../popup/CustomPopUp";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const [show, setshow] = useState(false);

  // Sends a request to the server to connect and connects only if we have an existing user
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosInstance.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      setshow(true);
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          type="text"
          className="loginInput"
          placeholder="Enter your username"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password"
          ref={passwordRef}
        />
        <button className="btnLogin" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      {show && (
        <CustomPopUp
          title={"הודעת מערכת"}
          body={" שם משתמש או סיסמה שגויים"}
          show={show}
          setShow={setshow}
        />
      )}
    </div>
  );
}
