import { SectionContainer } from "./SectionStyled";

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <h2>Course: {title}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;

