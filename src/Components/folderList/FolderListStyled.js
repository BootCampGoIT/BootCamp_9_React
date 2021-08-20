import styled from "styled-components";

// const folderSize = {
//   width: 24,
//   height: 24,
// };

export const FolderListContainer = styled.ul`
  display: flex;
  flex-direction: column;


  .folderItem {
    position: relative;
    margin-left: 10px;
  }
  .folderItem:not(:last-child):before {
    content: "";
    position: absolute;
    top: 0px;
    left: -15px;
    width: 1px;
    height: calc(100% + 12px);
    border-left: 1px solid gray;
  }

  .folderContainer::before {
    content: "";
    position: absolute;
    top: 12px;
    left: -15px;
    width: 10px;
    height: 1px;
    background-color: gray;
  }

  .folderContainer {
    display: flex;
    align-items: center;
  }
  .folderIconContainer {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .folderIcon {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.folder};
  }

  .folderTitle {
    margin-left: 15px;
    color: ${({ theme }) => theme.colors.text};
  }

  .folderListContainer {
    margin-left: 15px;
  }
`;
