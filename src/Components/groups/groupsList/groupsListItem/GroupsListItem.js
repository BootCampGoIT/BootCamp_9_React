import React from "react";
import { GroupsListItemContainer } from "./GroupListItemStyled";
import { useHistory } from "react-router-dom";

const GroupsListItem = ({ avatar, name, id }) => {
  const history = useHistory();

  const openDetails = () => {
    history.push(history.location.pathname + `/${id}`);
  };
  return (
    <GroupsListItemContainer>
      <div className='groupListItemContent'>
        <div className='groupAvatarBlock'>
          <img src={avatar} alt={name} className='groupAvatar' />
        </div>
        <div className='groupListItemTitleBlock'>
          <p className='groupListItemTitle'>{name}</p>
        </div>
        <button type='button' onClick={openDetails}>
          Details
        </button>
      </div>
    </GroupsListItemContainer>
  );
};

export default GroupsListItem;
