import styled from "styled-components";

export const AdminPageContainer = styled.div`
  .adminHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navList {
    display: flex;
    align-items: center;
    height: 100%;
  }

  .navItem {
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
