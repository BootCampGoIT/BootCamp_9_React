import CoursesListItem from "./coursesListItem/CoursesListItem";
import { CoursesListStyled } from "./CoursesListStyled";

const CoursesList = ({ courses, deleteCourse, data }) => {
  return (
    <CoursesListStyled>
      {courses.map((course) => (
        <CoursesListItem
          {...course}
          deleteCourse={deleteCourse}
          key={course.id}
        />
      ))}
    </CoursesListStyled>
  );
};

export default CoursesList;
