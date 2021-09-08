import React from "react";
import { useSelector } from "react-redux";
import { GroupsListContainer } from "./GroupsListStyled";

const GroupsList = () => {
  const groups = useSelector((state) => state.groups.items);
  return (
    <GroupsListContainer>
      {groups.map((group, idx) => (
        <li key={idx}>{group.name}</li>
      ))}
    </GroupsListContainer>
  );
};

export default GroupsList;
