import { SectionContainer } from "./SectionStyled";

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;
