import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroupsOperation } from "../../../redux/groups/groupsOperations";
import LoaderComponent from "../../loader/Loader";
import { GroupsListContainer } from "./GroupsListStyled";

const GroupsList = () => {
  const groups = useSelector((state) => state.groups.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGroupsOperation());
  }, [dispatch]);

  return (
    <GroupsListContainer>
      {groups === null ? (
        <LoaderComponent />
      ) : groups ? (
        groups.map((group, idx) => <li key={idx}>{group.name}</li>)
      ) : (
        <p>No Data</p>
      )}
    </GroupsListContainer>
  );
};

export default GroupsList;
