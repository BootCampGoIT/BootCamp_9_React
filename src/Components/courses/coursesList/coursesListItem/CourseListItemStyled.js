import styled from "styled-components";

export const CourseListItemContainer = styled.li`
  width: 50%;
  padding: 5px;
  height: 200px;
  .courseListItemContent {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 16px;
    padding: 10px;
  }
  .courseAvatarBlock {
    width: 100px;
    height: 100px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
  }
  .courseAvatar {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
  .courseListItemTitleBlock {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  @media (min-width: 768px) {
    width: 25%;
    height: 250px;
    .courseAvatarBlock {
      width: 150px;
      height: 150px;
    }
  }
  @media (min-width: 1024px) {
    width: 20%;
    height: 300px;
    .courseAvatarBlock {
      width: 200px;
      height: 200px;
    }
  }
`;