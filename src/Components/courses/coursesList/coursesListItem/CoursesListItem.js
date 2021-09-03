import React from "react";
import { CourseListItemContainer } from "./CourseListItemStyled";
import { useHistory } from "react-router-dom";

const CoursesListItem = ({ id, avatar, name, deleteCourse }) => {
  const history = useHistory();
  console.log("history :>> ", history);
  const deleteItem = () => deleteCourse(id);

  const openDetails = () => {
    history.push(history.location.pathname + `/${id}`);
  };
  return (
    <CourseListItemContainer>
      <div className='courseListItemContent'>
        <div className='courseAvatarBlock'>
          <img src={avatar} alt={name} className='courseAvatar' />
        </div>
        <div className='courseListItemTitleBlock'>
          <h2 className='courseListItemTitle'>{name}</h2>
        </div>
        <button type='button' onClick={openDetails}>
          Details
        </button>
        {deleteCourse && (
          <button
            type='button'
            onClick={deleteItem}
            className='courseListItemTitle'>
            Delete
          </button>
        )}
      </div>
    </CourseListItemContainer>
  );
};

export default CoursesListItem;
