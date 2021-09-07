import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid ${({ theme }) => theme.colors.main};

  .headerLogo {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.main};
    font-size: 24px;
   
  }

  .headerNavigationBlock {
    display: flex;
    align-items: center;
  }
  .settingsBlock {
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all 300ms linear;
    padding: 10px;
  }
  .settingsBlock:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  .headerSettingsIcon {
    width: 100%;
    height: 100%;

    fill: ${({ theme }) => theme.colors.main};
  }

  .headerSettingsBackDrop {
    width: 320px;
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 16px;
  }
  .headerSettingsTitleContainer {
    display: flex;
    justify-content: space-between;
  }
  .headerSettingsTitle {
    text-align: center;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.main};
  }
  .headerSettingsIconContainer,
  .headerSettingsIconCloseContainer {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .headerSettingsIconClose {
    transition: all 300ms linear;
    cursor: pointer;
  }

  .headerSettingsIconClose:hover {
    fill: ${({ theme }) => theme.colors.active};
  }
  .headerSettingsIcon {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.text};
  }
  .headerSettingsIconClose {
    width: 80%;
    height: 80%;
    fill: ${({ theme }) => theme.colors.text};
  }
`;
