import React, { useEffect, useState } from "react";
import { debounce } from "lodash";

const Debounce = () => {
  let timerId;
  const [inputEl, setInput] = useState("radhe");
  const [inputEl2, setInput2] = useState("radhe2");

  const makeAPICall = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts");
  };

  const onChangeInput = (event) => {
    clearTimeout(timerId);
    // We are executing only when there is a delay in event

    timerId = setTimeout(() => {
      setInput(event.target.value);
      makeAPICall();
      console.log("State updated with value of", event.target.value);
    }, 500);
  };

  // Executing the same using debounce function from lodash

  const onChangeInput2 = (event) => {
    const setInputDebounce = debounce(() => {
      setInput2(event.target.value);
    }, 1000);
    setInputDebounce();
  };

  return (
    <div>
      <input
        type="text"
        className="form-control"
        onChange={onChangeInput}
        placeholder="Verify deBouncing using custom function"
      />
      <h1>{inputEl}</h1>
      <input
        type="text"
        className="form-control"
        onChange={onChangeInput2}
        placeholder="Verify deBouncing using lodash function"
      />
      <h1>{inputEl2}</h1>
    </div>
  );
};

export default Debounce;
