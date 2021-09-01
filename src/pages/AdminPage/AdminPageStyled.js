import styled from "styled-components";

export const AdminPageContainer = styled.div`
  .navList {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .navItem {
    margin-bottom: 10px;
  }
  .navItem:not(:last-child) {
    margin-right: 20px;
  }

  .navLink {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text};
    font-weight: 700;
    &:hover {
      color: ${(props) => props.theme.colors.active};
    }
  }
  .activeNavLink {
    color: ${(props) => props.theme.colors.main};
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }
`;
