import React from "react";
import { useSelector } from "react-redux";

const GroupsList = () => {
  const groups = useSelector((state) => state.groups.items);
  return (
    <ul>
      {groups.map((group, idx) => (
        <li key={idx}>{group.name}</li>
      ))}
    </ul>
  );
};

export default GroupsList;
