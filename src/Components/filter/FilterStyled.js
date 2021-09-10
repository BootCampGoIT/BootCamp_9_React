import styled from "styled-components";

export const FilterContainer = styled.div`
  .filterLabel {
    display: flex;
    align-items: center;
    max-width: 320px;
  }
  .filterIcon {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.colors.main};
    margin-right: 10px;
  }
`;
