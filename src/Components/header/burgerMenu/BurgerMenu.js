import React, { useContext, useState } from "react";
import { BurgerMenuContainer, BurgerMenuContent } from "./BurgerMenuStyled";
import sprite from "../../../icons/header/sprite.svg";
import Modal from "../../modal/Modal";
import Switch from "react-switch";
import Navigation from "../navigation/Navigation";
import { CustomLanguage, CustomTheme } from "../../App";
import { languages } from "../../../languages";

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
              <Navigation />
              <div className='burgerOptionsContainer'>
                <div className='burgerOption'>
                  <span className='switcherTitle'>
                    {language.header.burgerMenu["toggleTheme"]}
                  </span>
                  <Switch
                    onChange={changeTheme}
                    checked={theme.title === "dark"}
                    onColor={theme.colors.main}
                    offColor={theme.colors.active}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={14}
                    width={34}
                    handleDiameter={14}
                  />
                </div>
                <div className='burgerOption'>
                  <span> {language.header.burgerMenu["changeLanguage"]}</span>
                  <select
                    className='burgerLanguageSelector'
                    name='languageSelector'
                    onChange={setLanguage}
                    defaultValue={language.title}>
                    {languages.list.map((lang) => (
                      <option value={lang} key={lang}>
                        {languages[lang].originalTitle}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </BurgerMenuContent>
    </>
  );
};

export default BurgerMenu;
