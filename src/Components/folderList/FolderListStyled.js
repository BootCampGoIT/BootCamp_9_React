import styled from "styled-components";

export const FolderListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  border-left: 2px solid gray;
  .folderItem {
    position: relative;
    margin-left: 10px;
  }

  .folderContainer::before {
    content: "";
    position: absolute;
    top: 12px;
    left: -12px;
    width: 10px;
    height: 2px;
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
