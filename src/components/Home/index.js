import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

let cancelToken;
const Home = (props) => {
  // console.log("In component", props);
  const [inp, setInp] = useState("");
  const [cancelToken, setCancelToken] = useState();

  const callList = async (tokenObj) => {
    setCancelToken(tokenObj);
    // console.log(cancelToken, tokenObj);
    try {
      const result = await axios("https://jsonplaceholder.typicode.com/posts", {
        cancelToken: tokenObj.token,
      });
      console.log("API called", result.data.slice(0, 1));
    } catch (error) {
      console.log("API cancelled", error);
    }
  };

  useEffect(() => {
    if (cancelToken !== undefined) {
      cancelToken.cancel();
    }
    let tokenObj = axios.CancelToken.source();
    // setCancelToken();
    callList(tokenObj);
  }, [inp]);

  const ReplaceHistoryStack = () => {
    const history = props.history;
    for (var i = 0; i < window.history.length; i++) {
      window.history.replaceState(null, "login", "/login");
      window.history.go(-1);
    }
  };

  const logout = () => {
    Cookies.remove("jwtToken");
    ReplaceHistoryStack();
    props.history.push("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-center ">
      <input
        type="text"
        name=""
        id=""
        value={inp}
        onChange={(event) => setInp(event.target.value)}
      />
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default Home;
