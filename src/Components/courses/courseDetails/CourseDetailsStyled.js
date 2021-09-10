import styled from "styled-components";

export const CourseDetailsContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  padding: 10px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;

  .courseDetailsContent {
    display: flex;
    flex-direction: column;
  }

  .courseDetailsAvatar {
    border-radius: 16px;
  }
  .courseDetailsTitleBlock {
    text-align: center;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    .courseDetailsAvatarBlock {
      width: 300px;
      height: 300px;
    }
    .courseDetailsDescription {
      margin-left: 10px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
  }
`;
