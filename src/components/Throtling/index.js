import React, { useEffect, useState } from "react";

const Throtling = () => {
  let timerId;
  const [inputEl, setInput] = useState("radhe");

  const makeAPICall = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts");
  };

  const onChangeInput = (event) => {
    // we ca also set the min lenght like - !timerId && event.target.value.length>=3 like react-icons website search rule.
    if (!timerId) {
      timerId = setTimeout(() => {
        setInput(event.target.value);
        makeAPICall();
        timerId = null;
      }, 1000);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        onChange={onChangeInput}
        placeholder="Verify Throtling using custom function"
      />
      <h1>{inputEl}</h1>
    </div>
  );
};

export default Throtling;
