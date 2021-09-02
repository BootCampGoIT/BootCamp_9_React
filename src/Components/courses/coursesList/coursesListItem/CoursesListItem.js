import React from "react";
import { CourseListItemContainer } from "./CourseListItemStyled";

const CoursesListItem = ({ id, avatar, name, description, deleteCourse }) => {
  const deleteItem = () => deleteCourse(id);
  return (
    <CourseListItemContainer>
      <div className='courseListItemContent'>
        <div className='courseAvatarBlock'>
          <img src={avatar} alt={name} className='courseAvatar' />
        </div>
        <div className='courseListItemTitleBlock'>
          <h2 className='courseListItemTitle'>{name}</h2>
        </div>
        <button
          type='button'
          onClick={deleteItem}
          className='courseListItemTitle'>
          Delete
        </button>
      </div>
    </CourseListItemContainer>
  );
};

export default CoursesListItem;
