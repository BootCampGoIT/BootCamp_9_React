import styled from "styled-components";

export const ProfileFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 10px 0;

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
