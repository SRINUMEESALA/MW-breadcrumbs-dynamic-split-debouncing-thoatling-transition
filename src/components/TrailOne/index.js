import React, { useCallback, useMemo } from "react";
import { useState } from "react";
import ShowNames from "../ShowNames";

export const TrailOne = () => {
  const [hareList, setHareList] = useState([]);
  const [count, setCount] = useState(0);

  const updateHareList = useCallback(() => {
    setHareList([...hareList, "Krishna"]);
    console.log("Working");
  }, [count]);

  // const updateHareList = () => {
  //   setHareList([...hareList, "Krishna"]);
  // };

  // const ShowNamesMemo = useMemo(
  //   () => <ShowNames updateHareList={updateHareList} />,
  //   [hareList]
  // );

  return (
    <div>
      <h1>TrailOne</h1>
      {/* {ShowNamesMemo} */}
      <ShowNames updateHareList={updateHareList} />
      <div>
        {hareList.map((obj, ind) => (
          <h3 key={ind}>{obj}</h3>
        ))}
      </div>
      <h1>{count}</h1>
      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        Count
      </button>
    </div>
  );
};

// import React, { useCallback, useMemo } from "react";
// import { useState } from "react";

// const Child = () => {
//   console.log("child component rendered");
//   return <h1>Child Component</h1>;
// };

// export const TrailOne = () => {
//   const [inp, setInp] = useState(10);
//   const [name, setName] = useState("");

//   const findFact = useCallback(() => {
//     console.log("Factorial calculated");
//     let Fact = 1;
//     for (let i = 1; i < inp + 1; i++) {
//       Fact *= i;
//     }
//     console.log(Fact);
//     return Fact;
//   }, [inp]);
//   // const findFactMemo = useMemo(() => findFact(inp), [inp]);
//   const ChildMemo = useMemo(() => <Child findFact={findFact} />, []);
//   return (
//     <div>
//       <h1>TrailOne</h1>
//       <input
//         type="text"
//         name=""
//         id=""
//         value={inp}
//         onChange={(event) => setInp(event.target.value)}
//       />
//       <h1>{`Factorial of ${inp} is ${findFact}`}</h1>

//       {ChildMemo}
//       <input
//         type="text"
//         name=""
//         id=""
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//       />
//     </div>
//   );
// };
