import React, { useState } from "react";
import { BurgerMenuContent } from "./BurgerMenuStyled";
import Modal from "../../modal/Modal";
import Navigation from "../navigation/Navigation";
import Settings from "../settings/Settings";
import Burger from "./burger/Burger";

const BurgerMenu = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const toggleModal = () => setBurgerMenuOpen((prev) => !prev);

  return (
    <>
      <BurgerMenuContent>
        <Burger
          isBurgerMenuOpen={isBurgerMenuOpen}
          setBurgerMenuOpen={toggleModal}
        />
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
