import styled from "styled-components";

export const CourseRedactorContainer = styled.div`
  .courseFormModalWrapper {
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 16px;
    border: 1px solid ${({ theme }) => theme.colors.main};
  }
`;
