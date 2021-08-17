import Section from "../../section/Section";
import PropTypes from "prop-types";
import ModuleList from "./moduleList/ModuleList";

const CoursesList = ({ courses }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.key}>
          <Section title={course.name}>
            <h3>Modules:</h3>
            <ModuleList modules={course.modules} />
          </Section>
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;

CoursesList.propTypes = {
  courses: PropTypes.arrayOf({
    name: PropTypes.string,
    modules: PropTypes.array,
  }),
};
