import styled from "styled-components";

export const SettingsContainer = styled.div`
width: 100%;
  .burgerOptionsContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    color: ${({ theme }) => theme.colors.text};
    border-top: 2px solid ${({ theme }) => theme.colors.main};
    border-bottom: 2px solid ${({ theme }) => theme.colors.main};
    padding: 20px 0;
    margin-top: 20px;
  }
  .burgerOption {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
  .burgerLanguageSelector {
    width: 150px;
  }

  .burgerLanguageSelector,
  .settingsThemeSwitcher {
    cursor: pointer;
  }

  .switcherTitle {
    color: currentColor;
    margin-right: 20px;
  }
`;
