import { SectionContainer } from "./SectionStyled";

const Section = ({ title, children, newCourse }) => {
  return (
    <SectionContainer>
      <h2>Course: {title}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;
