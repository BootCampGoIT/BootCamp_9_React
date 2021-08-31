import styled from "styled-components";

export const ProfileFormContainer = styled.div`
  .profileAvatarContainer {
    width: 100px;
    height: 100px;
    border: 1px solid ${({ theme }) => theme.colors.main};
    border-radius: 16px;
    overflow: hidden;
  }

  .radiogroupContainer,
  .checkBoxContainer {
    display: flex;
  }
`;
