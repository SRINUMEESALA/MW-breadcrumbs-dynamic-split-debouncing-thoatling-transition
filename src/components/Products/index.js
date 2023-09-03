import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../../store/actions/UserActions";
import { apiStatusConstants } from "../../constants/constants";
import { ActionTypes } from "../../store/contants/ActionTypes";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductThree from "../ProductThree";
import ProductTwo from "../ProductTwo";
import BreadCrumbs from "../BreadCrumbs";

const Products = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const onClickFormSubmitIn = (event) => {
    event.preventDefault();
    dispatch(submitForm(username, password));
    setPassword("");
    setUsername("");
  };

  const resetForm = () => {
    setPassword("");
    setUsername("");
    dispatch({
      type: ActionTypes.SUBMIT_FORM,
      apiStatus: apiStatusConstants.initial,
    });
  };

  const renderSuccessView = () => (
    <div>
      <img
        src="https://img.freepik.com/free-vector/successful-businessman-celebrating-victory_1150-39772.jpg?size=626&ext=jpg&ga=GA1.2.905824719.1684755036&semt=ais"
        alt=""
        style={{ width: "100% " }}
      />
    </div>
  );
  const renderLoadingView = () => (
    <div>
      <img
        src="https://img.freepik.com/free-vector/loading-concept-illustration_114360-1057.jpg?size=626&ext=jpg&ga=GA1.2.905824719.1684755036&semt=ais"
        alt=""
        style={{ width: "100%" }}
      />
    </div>
  );
  const renderFailureView = () => (
    <div>
      <img
        src="https://img.freepik.com/free-vector/bad-idea-concept-illustration_114360-8261.jpg?size=626&ext=jpg&ga=GA1.1.905824719.1684755036&semt=ais"
        alt=""
        style={{ width: "100%" }}
      />
    </div>
  );
  const renderInitialView = () => (
    <div>
      <img
        src="https://img.freepik.com/free-vector/gradient-api-illustration_23-2149368725.jpg?size=626&ext=jpg&ga=GA1.1.905824719.1684755036&semt=ais"
        alt=""
        style={{ width: "100%" }}
      />
    </div>
  );

  const renderUI = () => {
    switch (state.formSubmissionApiStatus) {
      case apiStatusConstants.success:
        return renderSuccessView();
      case apiStatusConstants.fail:
        return renderFailureView();
      case apiStatusConstants.load:
        return renderLoadingView();
      default:
        return renderInitialView();
    }
  };

  return (
    <>
      <div className="routingCon"></div>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="shadow-lg p-3 w-75">
          <h3 className="h3 mb-3 text-center">Login Form</h3>
          <div className="col-12 d-flex p-3">
            <div className="col-6 align-self-center">
              <form
                className=" rounded shadow p-4"
                action=""
                onSubmit={onClickFormSubmitIn}>
                <input
                  type="text"
                  className="form-control  mt-2 mb-2"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  placeholder="Username"
                  required
                />
                <input
                  type="password"
                  className="form-control mt-2 mb-2"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Password"
                  required
                />
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-danger mt-2"
                    type="reset"
                    onClick={() => resetForm()}>
                    Reset
                  </button>
                  <button className="btn btn-primary mt-2" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-6">{renderUI()}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
