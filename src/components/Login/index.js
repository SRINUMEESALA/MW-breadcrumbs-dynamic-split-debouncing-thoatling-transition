import Cookies from "js-cookie";
import React from "react";

const Login = (props) => {
  const loginUser = () => {
    Cookies.set("jwtToken", "RadheKrishna");
    props.history.push("/");
  };
  return (
    <div>
      <h1>Login</h1>
      <button className="btn btn-warning" onClick={loginUser}>
        Login
      </button>
    </div>
  );
};
export default Login;
