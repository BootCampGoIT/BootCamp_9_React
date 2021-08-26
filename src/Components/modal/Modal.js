import React, { Component } from "react";
import { Overlay } from "./ModalStyled";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscape);
    // const body = document.querySelector("body");
    // body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscape);
    // const body = document.querySelector("body");
    // body.style.overflow = "auto";
  }

  handleEscape = (e) => e.code === "Escape" && this.props.closeModal();

  onOverlayClick = ({ target, currentTarget }) => {
    target === currentTarget && this.props.closeModal();
  };

  render() {
    return (
      <Overlay onClick={this.onOverlayClick}>
        <div className='modal'>{this.props.children}</div>
      </Overlay>
    );
  }
}

export default Modal;
