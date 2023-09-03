import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Header from "../Header";

const Profile = () => {
  const [fact, setFact] = useState(100);
  const [username, setUsername] = useState("");

  const factorial = () => {
    console.log("in factorail,100 iterations done");
    let factor = 1;
    for (let i = 1; i < fact + 1; i++) {
      factor *= i;
    }
    return factor;
  };
  const factorialMemo = useMemo(() => factorial(), [fact]);

  const NewComp = () => {
    console.log("New component rendered");
    return <h1>NewComp</h1>;
  };
  const newCompMemo = useMemo(() => <NewComp />, []);

  // const getComments = async () => {
  //   try {
  //     let data = await axios("https://jsonplaceholder.typicode.com/comments");
  //     setComments(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getComments();
  // }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1 className="text-primary text-center ">Profile</h1>
      <h1>RadheRadhe</h1>
      <input
        type="text"
        className="form-control"
        name=""
        id=""
        onChange={(event) => setUsername(event.target.value)}
      />

      <p>{username}</p>
      <h1>{factorialMemo}</h1>
      {newCompMemo}
    </div>
  );
};

export default Profile;

// import React, { Component } from "react";
// import { connect } from "react-redux";

// class Profile extends Component {
//   state = { username: "" };

//   factorial = (n) => {
//     if (this.props.prevFactorialValues[n] !== undefined) {
//       console.log("function terminates here and wont fall into loop again");
//       return this.props.prevFactorialValues[n];
//     }
//     console.log("in factorail,100 iterations done");
//     let factor = 1;
//     for (let i = 1; i < n + 1; i++) {
//       factor *= i;
//     }
//     this.props.prevFactorialValues[n] = factor;
//     return factor;
//   };

//   render() {
//     return (
//       <div>
//         <h1>RadheRadhe</h1>
//         <input
//           type="text"
//           className="form-control"
//           name=""
//           id=""
//           onChange={(event) => this.setState({ username: event.target.value })}
//         />
//         <p>{this.state.username}</p>
//         {this.factorial(100)}
//       </div>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     prevFactorialValues: state.reducer.prevFactorialValues,
//   };
// };
// const mapDispatchToProps = (state) => {
//   return {};
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
