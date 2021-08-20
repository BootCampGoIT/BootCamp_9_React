import Section from "../../section/Section";

import ModuleList from "./moduleList/ModuleList";

const CoursesList = ({ courses }) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.key}>
          <Section title={course.name} newCourse={course.newCourse}>
            <ModuleList modules={course.modules} />
          </Section>
        </li>
      ))}
    </ul>
  );
};

export default CoursesList;
