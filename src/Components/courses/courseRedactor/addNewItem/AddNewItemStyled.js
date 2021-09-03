import styled from "styled-components";

export const AddNewItemContainer = styled.li`
  width: 50%;
  padding: 5px;
  height: 200px;
  padding: 5px;
  cursor: pointer;

  .courseListItemAddNewContent {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 16px;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 300ms linear;
  }
  .courseListItemAddNewContent:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  .courseListItemAddNewIcon {
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.colors.main};
  }
  @media (min-width: 768px) {
    width: 25%;
    height: 250px;
  }

  @media (min-width: 1024px) {
    width: 20%;
    height: 300px;
  }
`;
