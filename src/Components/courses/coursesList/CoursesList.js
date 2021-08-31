import selectorHOC from "../../hoc/SelectorHOC";
import CoursesListItem from "./coursesListItem/CoursesListItem";
import { CoursesListStyled } from "./CoursesListStyled";

const CoursesList = ({ courses, deleteCourse, data }) => {
  return (
    <CoursesListStyled>
      <h2 style={{ color: data.colors.edit }}>Hello context</h2>

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

export default selectorHOC("theme")(CoursesList);
