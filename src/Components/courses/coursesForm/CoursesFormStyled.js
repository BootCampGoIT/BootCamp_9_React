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
  .coursesFormAvatarContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    border: 1px solid ${({ theme }) => theme.colors.main};
    border-radius: 16px;
    outline: none;
    padding: 10px;
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

  /* ===== avatar===========
   */
  .courseFormAvatarBlock {
    width: 100%;
    position: relative;
    text-align: center;
  }

  .courseFormAvatarFile {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    cursor: pointer;
  }

  .courseFormAvatarButton {
    display: block;
    margin: 0 auto;
    width: 100px;
    color: ${({ theme }) => theme.colors.buttonText};
    background-color: ${({ theme }) => theme.colors.main};
    height: 24px;
    font-size: 12px;
    text-transform: uppercase;
    border: none;
    border-radius: 16px;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
  }
  .courseFormAvatarButton:hover {
    background-color: ${(props) => props.theme.colors.active};
    outline: none;
  }
  .courseFormAvatarButtonText {
    font-weight: 700;
  }
`;
