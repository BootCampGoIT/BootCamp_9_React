import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";
import { CustomLanguage } from "../../App";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ isBurgerMenuOpen = false, toggleModal = null }) => {
  const { language } = useContext(CustomLanguage);
  const location = useLocation();
  const closeModal = () => {
    isBurgerMenuOpen && toggleModal();
  };
  return (
    <>
      <NavigationContainer>
        <ul className='navList'>
          {mainRoutes.map((link) => (
            <li key={link.path} className='navItem' onClick={closeModal}>
              <NavLink
                exact={link.exact}
                // to={link.path}
                to={{ pathname: link.path, state: { from: location } }}
                className='navLink'
                activeClassName='activeNavLink'>
                {language.header.navigation[link.name]}
              </NavLink>
            </li>
          ))}
        </ul>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
