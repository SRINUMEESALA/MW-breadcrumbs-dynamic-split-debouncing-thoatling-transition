import { lazy } from "react";
// import Products from "./components/Products";
// import Transition from "./components/Transition";
const LazyLoad = (path, namedExport = null) => {
  console.log(path, "./components/Products", namedExport);
  const promise = import(`${path}`);
  return lazy(() => {
    if (!namedExport) {
      return promise;
    }
    return promise.then((module) => ({ default: module[namedExport] }));
  });
};
export default LazyLoad;
