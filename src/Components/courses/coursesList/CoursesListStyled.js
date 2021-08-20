import styled from "styled-components";

export const CoursesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  .courseListItem {
    width: 200px;
  }

  .courseAvatarBlock {
    width: 100px;
    height: 100px;
    border: 2px solid ${({ theme }) => theme.colors.main};
    border-radius: 14px;
    position: relative;
    overflow: hidden;
  }

  .courseAvatar {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
`;
