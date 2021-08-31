import React from "react";
import Data1 from "./Data1";
import Data2 from "./Data2";
import withHigherOrderComponent from "./WithHoc";

const DataContainer = (props) => {
  return (
    <>
      <Data1 counter={props.values.counter} />
      <hr />
      <Data2 addCount={props.addCount} />
    </>
  );
};

export default withHigherOrderComponent(console.log)(
  DataContainer
);
