import React, { memo } from "react";

const ShowNames = (props) => {
  console.log("Inside shownames");
  const { updateHareList } = props;
  const updateHareListHere = () => {
    updateHareList();
  };
  return (
    <div>
      <div className="d-flex w-100">
        <div className="w-50">
          <button className="btn btn-info" onClick={updateHareListHere}>
            add name
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ShowNames);
