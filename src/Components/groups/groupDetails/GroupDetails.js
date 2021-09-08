import React, { useEffect, useState } from "react";
import { GroupDetailsContainer } from "./GroupDetailsStyled";
import { useParams } from "react-router-dom";

const GroupDetails = () => {
  const [group, setGroup] = useState(null);
  const { groupId } = useParams();

  useEffect(() => {}, [groupId]);
  return (
    <GroupDetailsContainer>
      <h2>Details</h2>
      {group && (
        <div className='courseListItemContent'>
          <div className='courseAvatarBlock'>
            <img
              width='300'
              src={group.avatar}
              alt={group.name}
              className='courseAvatar'
            />
          </div>
          <div className='courseListItemTitleBlock'>
            <h2 className='courseListItemTitle'>{group.name}</h2>
          </div>
          <p>{group.description}</p>
        </div>
      )}
    </GroupDetailsContainer>
  );
};

export default GroupDetails;
