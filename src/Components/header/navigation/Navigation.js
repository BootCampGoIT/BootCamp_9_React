import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../../routes/mainRoutes";
import { CustomLanguage } from "../../App";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = () => {
  const { language } = useContext(CustomLanguage);
  return (
    <>
      <NavigationContainer>
        <ul className='navList'>
          {mainRoutes.map((link) => (
            <li key={link.path} className='navItem'>
              <NavLink
                exact={link.exact}
                to={link.path}
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

// const styles = {};
