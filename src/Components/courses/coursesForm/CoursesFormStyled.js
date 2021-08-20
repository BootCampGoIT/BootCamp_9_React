import styled from "styled-components";

export const CourseFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;

  .avatarImageBlock {
    width: 100px;
    height: 100px;
    border: 2px solid ${({ theme }) => theme.colors.main};
    border-radius: 14px;
    position: relative;
    overflow: hidden;
  }

  .avatarImage {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;

  }
`;
