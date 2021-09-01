import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
  width: 40px;
  height: 40px;

  .headerBurger {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.colors.main};
  }
`;

export const BurgerMenuContent = styled.div`
  position: relative;
  .burgerBackdrop {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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

  .switcherTitle {
    color: currentColor;
    margin-right: 20px;
  }
  .burgerNavigationWrapper {
  }
`;
