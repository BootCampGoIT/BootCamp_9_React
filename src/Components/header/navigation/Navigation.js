import React, { useState } from "react";
import themes from "../../../themes";
import {
  NavigationContainer,
  StyledItem,
  StyledLink,
} from "./NavigationStyled";

const Navigation = ({ headerLinks, lang = "en" }) => {
  // const [lang, setLang] = useState("en");
  return (
    <>
      {/* <button
        type='button'
        onClick={() => setLang(lang === "ru" ? "en" : "ru")}>
        change language
      </button> */}
      <NavigationContainer>
        <ul className='navList'>
          {headerLinks.map((link) => (
            <li key={link.path} className='navItem'>
              <a href={link.path} className='navLink'>
                {link.name[lang]}
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
