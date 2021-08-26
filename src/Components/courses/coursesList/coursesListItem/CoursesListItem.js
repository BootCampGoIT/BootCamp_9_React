import React from "react";

const CoursesListItem = ({ id, avatar, name, description, deleteCourse }) => {
  const deleteItem = () => deleteCourse(id);
  return (
    <li className='courseListItem' key={id}>
      <div className='courseAvatarBlock'>
        <img src={avatar} alt={name} className='courseAvatar' />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <button type='button' onClick={deleteItem}>
        Delete
      </button>
    </li>
  );
};

export default CoursesListItem;
