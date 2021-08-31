import React, { useContext } from "react";
import { CustomThemeConsumer } from "../App";

const selectorHOC = (value) => (WrappedComponent) => (props) => {
  const data = useContext(CustomThemeConsumer);
  return (
    <>
      <WrappedComponent {...props} data={data[value]} />
    </>
  );
};

export default selectorHOC;
