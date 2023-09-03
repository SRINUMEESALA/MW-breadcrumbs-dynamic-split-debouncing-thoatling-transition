// import React, { useState } from "react";
// let TrailOneDyn;
// let ProfileDyn;
// let Products;
// const DynamicSplit = () => {
//   const [show, setShow] = useState("");
//   const [showTrailone, setShowTrailOne] = useState(false);
//   const onClickProductsBtn = async () => {
//     const module = await import("../Products");
//     Products = module.default;
//     setShow("Product");
//   };
//   const onClickProfileBtn = async () => {
//     try {
//       const module = await import("../Profile");
//       ProfileDyn = module.default;
//     } catch (error) {
//       ProfileDyn = `<h1>Something went wrong</h1>`;
//     }

//     setShow("Profile");
//   };
//   const onClickTrailBtn = async () => {
//     const module = await import("../TrailOne");
//     TrailOneDyn = module.TrailOne;
//     setShowTrailOne(!showTrailone);
//   };
//   return (
//     <div className="">
//       <h1>Dynamic Split</h1>
//       <div className="">
//         <button className="btn btn-warning m-3" onClick={onClickProfileBtn}>
//           Profile
//         </button>
//         <button className="btn btn-info m-3" onClick={onClickProductsBtn}>
//           Product
//         </button>
//         <button className="btn btn-info m-3" onClick={onClickTrailBtn}>
//           TrailOne
//         </button>
//       </div>
//       {show === "Product" && <Products />}
//       {show === "Profile" && <ProfileDyn />}
//       {showTrailone && <TrailOneDyn />}
//     </div>
//   );
// };

// export default DynamicSplit;

import React, { Suspense, lazy, useState, useTransition } from "react";

let Profile = <></>;
let Products = <></>;
const DynamicSplit = () => {
  const [show, setShow] = useState("");
  const [isProfilePending, startProfileTransition] = useTransition();
  const [isProductsPending, startProductTransition] = useTransition();
  // console.log(isProductsPending, isProfilePending, startProductTransition);
  const onClickProductsBtn = () => {
    Products = lazy(() => import("../Products"));
    startProductTransition(() => {
      setShow("Products");
    });
  };
  const onClickProfileBtn = () => {
    Profile = lazy(() => import("../Profile"));
    startProfileTransition(() => {
      setShow("Profile");
    });
  };
  // const onClickProductsBtn = () => {
  //   Products = lazy(() => import("../Products"));
  //   setShow("Products");
  // };
  // const onClickProfileBtn = () => {
  //   Profile = lazy(() => import("../Profile"));
  //   setShow("Profile");
  // };
  return (
    <div className="">
      <h1>Dynamic Split</h1>
      <div className="">
        <button className="btn btn-warning m-3" onClick={onClickProfileBtn}>
          Profile
        </button>
        <button className="btn btn-info m-3" onClick={onClickProductsBtn}>
          Product
        </button>
      </div>
      <Suspense fallback={<h1>Loading Krishna....</h1>}>
        {show === "Products" && <Products />}
        {show === "Profile" && <Profile />}
      </Suspense>
    </div>
  );
};

export default DynamicSplit;
