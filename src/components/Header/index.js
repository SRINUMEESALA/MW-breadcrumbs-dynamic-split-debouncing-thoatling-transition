import React, { useState } from "react";
import { Link } from "react-router-dom";
import { memo } from "react";

const Header = () => {
  // const history = useHistory();

  // const onClickClearButton = () => {
  //   for (let i = 0; i < 2; i++) {
  //     // console.log(history.location.pathname);
  //     if (currentLoc !== history.location.pathname) {
  //       setCurrentLoc(history.location.pathname);
  //       console.log("executed", history.location.pathname, currentLoc);
  //     }
  //     history.go(-1);
  //     console.log("i-", i);
  //   }
  // };

  return (
    <div className="d-flex justify-content-around">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/MyNamedExportComp">MyNamedExportComp</Link>
      <Link to="/trans">Transition</Link>
      <Link to="/db">Debounce</Link>
      <Link to="/tr">Throtlling</Link>
    </div>
  );
};

export default memo(Header);
