import React, { useState } from "react";
import { BurgerMenuContainer, BurgerMenuContent } from "./BurgerMenuStyled";
import sprite from "../../../icons/header/sprite.svg";
import Modal from "../../modal/Modal";
import Navigation from "../navigation/Navigation";

import Settings from "../settings/Settings";

const BurgerMenu = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const toggleModal = () => setBurgerMenuOpen((prev) => !prev);

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
