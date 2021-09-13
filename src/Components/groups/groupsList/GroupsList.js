import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGroupsOperation } from "../../../redux/groups/groupsOperations";
import { GroupsListContainer } from "./GroupsListStyled";
import { resetError } from "../../../redux/groups/groupsActions";
import {
  groupsErrorSelector,
  groupsItemsSelector,
} from "../../../redux/groups/groupsSelectors";
import GroupsListItem from "./groupsListItem/GroupsListItem";

const GroupsList = ({ children }) => {
  const dispatch = useDispatch();
  const groups = useSelector(groupsItemsSelector);
  const error = useSelector(groupsErrorSelector);

  useEffect(() => {
    dispatch(getGroupsOperation());
  }, [dispatch]);

  return (
    <>
      <GroupsListContainer>
        {children}
        {!error && groups ? (
          <>
            {groups.map((group) => (
              <GroupsListItem {...group} key={group.id} />
            ))}
          </>
        ) : (
          <p>{error}</p>
        )}
      </GroupsListContainer>
    </>
  );
};

export default GroupsList;
