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
    color: ${(props) => props.theme.colors.text};

    &:hover {
      color: ${(props) => props.theme.colors.active};
    }
  }
  .activeNavLink {
    color: ${(props) => props.theme.colors.main};
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

    .navLink {
      font-size: 16px;
    }
  }

  @media (min-width: 1024px) {
  }
`;
