import styled from "styled-components";

export const SectionContainer = styled.section`
  .sectionTitle {
    color: ${({ theme }) => theme.colors.main};
    padding: 5px 0;
    margin-bottom: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }
`;
