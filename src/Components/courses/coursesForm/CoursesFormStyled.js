import styled from "styled-components";

export const CourseFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 10px 0;

  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 16px;
  padding: 10px;
  .avatarContainer {
    width: 100%;
  }

  .coursesFormLabel {
    width: 100%;
  }
  .coursesFormInput {
    width: 100%;
  }
  .coursesFormArea {
    width: 100%;
    height: 100px;
  }

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
