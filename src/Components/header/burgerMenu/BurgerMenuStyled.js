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
`;
