import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100vw;
  /* height: 100vh; */
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;

  .modal {
    /* background-color: ${({ theme }) => theme.colors.modal}; */
  }
`;
