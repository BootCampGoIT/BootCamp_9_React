import React from "react";
import { BurgerContainer } from "./BurgerStyled";

const Burger = ({ isBurgerMenuOpen, setBurgerMenuOpen }) => {
  const setSideBar = () => {
    setBurgerMenuOpen((prev) => !prev);
  };

  return (
    <BurgerContainer open={isBurgerMenuOpen} onClick={setSideBar}>
      <div className='burgerContent'>
        <div className='line' />
        <div className='line' />
        <div className='line' />
      </div>
    </BurgerContainer>
  );
};

export default Burger;
