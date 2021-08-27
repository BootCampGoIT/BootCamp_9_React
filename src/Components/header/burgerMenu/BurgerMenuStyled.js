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
  .switcherContainer {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.main};
    border-top: 2px solid ${({ theme }) => theme.colors.main};
    padding: 20px 0;
    margin-top: 20px;
  }

  .switcherTitle {
    color: currentColor;
    margin-right: 20px;
  }
  .burgerNavigationWrapper {
    
  }
`;
