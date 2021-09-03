import React, { Component, useState, useEffect } from "react";
import { HeaderContainer } from "./HeaderStyled";
import Navigation from "./navigation/Navigation";
import BurgerMenu from "./burgerMenu/BurgerMenu";
import { Link } from "react-router-dom";
import sprite from "../../icons/header/sprite.svg";
import Modal from "../modal/Modal";
import Settings from "./settings/Settings";

const initialstate = {
  width: window.innerWidth,
  breakPoint: 768,
  isSettingsOpen: false,
};

const Header = () => {
  const [state, setState] = useState(initialstate);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  });
  const toggleModal = () =>
    setState((prev) => ({ ...prev, isSettingsOpen: !prev.isSettingsOpen }));

  const handleResizeWindow = () =>
    setState((prev) => ({ ...prev, width: window.innerWidth }));
  return (
    <HeaderContainer>
      <Link to='/' className='headerLogo'>
        ITED
      </Link>

      {state.width < state.breakPoint ? (
        <BurgerMenu />
      ) : (
        <div className='headerNavigationBlock'>
          <Navigation />
          <div className='settingsBlock' onClick={toggleModal}>
            <svg className='headerSettingsIcon'>
              <use href={sprite + "#icon-dots-three-vertical"} />
            </svg>
          </div>
        </div>
      )}
      {state.isSettingsOpen && (
        <Modal closeModal={toggleModal}>
          <div className='headerSettingsBackDrop'>
            <div className='headerSettingsTitleContainer'>
              <div className='headerSettingsIconContainer'>
                <svg className='headerSettingsIcon'>
                  <use href={sprite + "#icon-cog"} />
                </svg>
              </div>
              <h2 className='headerSettingsTitle'>Settings</h2>
              <div
                className='headerSettingsIconCloseContainer'
                onClick={toggleModal}>
                <svg className='headerSettingsIconClose'>
                  <use href={sprite + "#icon-cross"} />
                </svg>
              </div>
            </div>
            <Settings />
          </div>
        </Modal>
      )}
    </HeaderContainer>
  );
};

export default Header;
