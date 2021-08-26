import styled from "styled-components";

export const NavigationContainer = styled.nav`
  .navList {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navItem {
    margin-bottom: 10px;
  }

  .navLink {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.main};
    font-weight: 700;
    &:hover {
      color: ${(props) => props.theme.colors.active};
    }
  }

  @media (min-width: 768px) {
    .navList {
      flex-direction: row;
    }

    .navItem {
      margin-bottom: 0px;
    }
    .navItem:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
