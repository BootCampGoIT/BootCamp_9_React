import styled from "styled-components";

export const GroupsListItemContainer = styled.li`
  width: 50%;
  padding: 5px;
  height: 200px;
  .groupListItemContent {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 16px;
    padding: 10px;
  }
  .groupAvatarBlock {
    width: 100px;
    height: 100px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
  }
  .groupAvatar {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
  .groupListItemTitleBlock {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
  @media (min-width: 768px) {
    width: 25%;
    height: 250px;
    .groupAvatarBlock {
      width: 150px;
      height: 150px;
    }
  }
  @media (min-width: 1024px) {
    width: 20%;
    height: 300px;
    .groupAvatarBlock {
      width: 200px;
      height: 200px;
    }
  }
`;
