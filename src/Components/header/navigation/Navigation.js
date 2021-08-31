import React, { useContext } from "react";
import { CustomLanguage } from "../../App";

import { NavigationContainer } from "./NavigationStyled";

const headerLinks = [
  "home",
  "courses",
  "groups",
  "profile",
  "signin",
  "signup",
];

const Navigation = () => {
  const { language } = useContext(CustomLanguage);
  return (
    <>
      <NavigationContainer>
        <ul className='navList'>
          {headerLinks.map((link) => (
            <li key={link} className='navItem'>
              <a href={link} className='navLink'>
                {language.header.navigation[link]}
              </a>
            </li>
          ))}
        </ul>
      </NavigationContainer>
    </>
  );
};

export default Navigation;

// const styles = {};
