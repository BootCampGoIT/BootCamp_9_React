import React, { Component } from "react";
import { BurgerMenuContainer, BurgerMenuContent } from "./BurgerMenuStyled";
import sprite from "../../../icons/header/sprite.svg";
import Modal from "../../modal/Modal";
import Switch from "react-switch";
import Navigation from "../navigation/Navigation";
console.log(React);
class BurgerMenu extends Component {
  state = {
    isBurgerMenuOpen: false,
  };

  toggleModal = () =>
    this.setState((prev) => ({ isBurgerMenuOpen: !prev.isBurgerMenuOpen }));

  render() {
    const { isBurgerMenuOpen } = this.state;
    return (
      <>
        <BurgerMenuContent>
          <BurgerMenuContainer onClick={this.toggleModal}>
            <svg className='headerBurger'>
              <use href={sprite + "#icon-menu"} />
            </svg>
          </BurgerMenuContainer>
          {isBurgerMenuOpen && (
            <Modal closeModal={this.toggleModal}>
              <div className='burgerBackdrop'>
                <Navigation headerLinks={this.props.headerLinks} />
                <div className='burgerOptionsContainer'>
                  <span className='switcherTitle'>ToggleTheme</span>
                  <Switch
                    onChange={this.props.toggleTheme}
                    checked={this.props.theme.title === "dark"}
                    onColor={this.props.theme.colors.main}
                    offColor={this.props.theme.colors.active}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={14}
                    width={34}
                    handleDiameter={14}
                  />
                </div>
              </div>
            </Modal>
          )}
        </BurgerMenuContent>
      </>
    );
  }
}

export default BurgerMenu;
