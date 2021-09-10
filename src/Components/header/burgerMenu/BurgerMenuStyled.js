import styled from "styled-components";

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
