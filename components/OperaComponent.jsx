import React from "react";

const OperaComponent = ({
  position,
  top,
  left,
  right,
  bottom,
  before,
  after,
}) => {
  return (
    <>
      <div
        style={{
          position,
          left,
          top,
          right,
          bottom,
          zIndex: -1,
        }}
        className="opera-container sm:w-[3rem] sm:h-[3rem] w-[2rem] h-[2rem]"
      >
        <div
          style={{ "--before": before, "--after": after }}
          className="round-div"
        ></div>
      </div>
    </>
  );
};

export default OperaComponent;
