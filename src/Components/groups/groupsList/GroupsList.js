import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroupsOperation } from "../../../redux/groups/groupsOperations";
import { GroupsListContainer } from "./GroupsListStyled";

import { groupsItemsSelector } from "../../../redux/groups/groupsSelectors";
import GroupsListItem from "./groupsListItem/GroupsListItem";

const GroupsList = ({ children }) => {
  const dispatch = useDispatch();
  const groups = useSelector(groupsItemsSelector);

  useEffect(() => {
    dispatch(getGroupsOperation());
  }, [dispatch]);

  return (
    <GroupsListContainer>
      {children}
      {groups?.map((group) => (
        <GroupsListItem {...group} key={group.id} />
      ))}
    </GroupsListContainer>
  );
};

export default GroupsList;
