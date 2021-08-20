import { Overlay } from "./ModalStyled";

const Modal = ({ children, closeModal }) => {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";

  const onOverlayClick = ({ target, currentTarget }) => {
    target === currentTarget && closeModal();
    body.style.overflow = "auto";
  };

  return (
    <Overlay onClick={onOverlayClick}>
      <div className='modal'>{children}</div>
    </Overlay>
  );
};

export default Modal;
