import React, { useContext, useState } from "react";
import { BurgerMenuContainer, BurgerMenuContent } from "./BurgerMenuStyled";
import sprite from "../../../icons/header/sprite.svg";
import Modal from "../../modal/Modal";
import Switch from "react-switch";
import Navigation from "../navigation/Navigation";
import { CustomLanguage, CustomTheme } from "../../App";
import { languages } from "../../../languages";
import Settings from "../settings/Settings";


const BurgerMenu = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const { theme, changeTheme } = useContext(CustomTheme);
  const { language, changeLanguage } = useContext(CustomLanguage);

  const toggleModal = () => setBurgerMenuOpen((prev) => !prev);

  const setLanguage = (e) => {
    const { value } = e.target;
    changeLanguage(value);
  };

  return (
    <>
      <BurgerMenuContent>
        <BurgerMenuContainer onClick={toggleModal}>
          <svg className='headerBurger'>
            <use href={sprite + "#icon-menu"} />
          </svg>
        </BurgerMenuContainer>
        {isBurgerMenuOpen && (
          <Modal closeModal={toggleModal}>
            <div className='burgerBackdrop'>
              <Navigation
                isBurgerMenuOpen={isBurgerMenuOpen}
                toggleModal={toggleModal}
              />
              <Settings />
            </div>
          </Modal>
        )}
      </BurgerMenuContent>
    </>
  );
};

export default BurgerMenu;
