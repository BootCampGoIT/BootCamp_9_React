import React, { useState, useEffect, useContext } from "react";

import { useHistory } from "react-router-dom";
import { TransferContent } from "../App";
import { SectionContainer } from "./SectionStyled";

const Section = ({ title, children }) => {
  const history = useHistory();
  const [from, setFrom] = useState(null);
  const transferData = useContext(TransferContent);
  console.log("transferData :>> ", transferData);

  useEffect(() => {
    if (history.location.state) {
      setFrom(history.location.state.from);
      transferData.setContent({ from: history.location.state.from });
    }
    // eslint-disable-next-line
  }, [history.location.state]);

  const goBack = () => history.push(from);

  return (
    <SectionContainer>
      <h2>{title.toUpperCase()}</h2>
      <hr />
      {from && (
        <button type='button' onClick={goBack}>
          Go back
        </button>
      )}
      {children}
    </SectionContainer>
  );
};

export default Section;
