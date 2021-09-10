import styled from "styled-components";

export const BurgerContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;

  .burgerContent {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  .line {
    height: 3px;
    background-color: ${(props) => props.theme.colors.main};
    transform-origin: 1px;
    transition: all 0.2s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
