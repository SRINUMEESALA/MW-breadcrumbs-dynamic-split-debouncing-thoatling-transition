import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import { Suspense, lazy } from "react";
import LazyLoad from "./LazyLoad";
import Login from "./components/Login";
import { TrailOne } from "./components/TrailOne";
import ProductThree from "./components/ProductThree";
import ProductTwo from "./components/ProductTwo";
import ProductOne from "./components/ProductOne";
import BreadCrumbs from "./components/BreadCrumbs";
import BreadCrumbMUI from "./components/BreadCrumbMUI";
import Debounce from "./components/Debounce";
import Throtling from "./components/Throtling";
import VoiceBot from "./components/VoiceBot";
// import Transition from "./components/Transition";
// import Home from "./components/Home";
// import Cart from "./components/Cart";
// import Products from "./components/Products";
// import Profile from "./components/Profile";
// import DynamicSplit from "./components/DynamicSplit";
// import { MyNamedExportComp } from "./components/MyNamedExportComp";
const Home = lazy(() => import("./components/Home"));
const Products = lazy(() => import("./components/Products"));
// const Transition = LazyLoad("./components/Transition");
const Transition = lazy(() => import("./components/Transition"));
const Profile = lazy(() => import("./components/Profile"));
const DynamicSplit = lazy(() => import("./components/DynamicSplit"));
const Cart = lazy(() => wait(2000).then(() => import("./components/Cart")));
const MyNamedExportComp = lazy(() =>
  import("./components/MyNamedExportComp").then((module) => ({
    default: module.MyNamedExportComp,
  }))
);

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        {/* <Header /> */}
        {/* 
        <div className="p-3 border border-primary rounded m-3">
          <BreadCrumbMUI />
        </div> */}

        <Switch>
          <Route exact path="/voice-bot" component={VoiceBot} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/books" component={ProductOne} />
          <Route exact path="/db" component={Debounce} />
          <Route exact path="/tr" component={Throtling} />
          <Route exact path="/products/books/devotion" component={ProductTwo} />
          <Route
            exact
            path="/products/books/devotion/india"
            component={ProductThree}
          />
          <Route exact path="/profile" component={Profile} />
          <Route
            exact
            path="/MyNamedExportComp"
            component={MyNamedExportComp}
          />
          <Route exact path="/trans" component={Transition} />
          <Route exact path="/trailone" component={TrailOne} />
          <Route exact path="*" component={DynamicSplit} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

const wait = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

export default App;
