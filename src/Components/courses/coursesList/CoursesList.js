import { CoursesListStyled } from "./CoursesListStyled";

const CoursesList = ({ courses }) => {
  return (
    <CoursesListStyled>
      {courses.map((course) => (
        <li className='courseListItem' key={course.id}>
          <div className='courseAvatarBlock'>
            <img
              src={course.avatar}
              alt={course.name}
              className='courseAvatar'
            />
          </div>
          <h3>{course.name}</h3>
          <p>{course.description}</p>
        </li>
      ))}
    </CoursesListStyled>
  );
};

export default CoursesList;
