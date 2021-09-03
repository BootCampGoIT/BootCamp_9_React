import React, { useContext } from "react";

import Switch from "react-switch";

import { SettingsContainer } from "./SettingsStyled";
import { languages } from "../../../languages";
import { CustomLanguage, CustomTheme } from "../../App";

const Settings = () => {
  const { theme, changeTheme } = useContext(CustomTheme);
  const { language, changeLanguage } = useContext(CustomLanguage);

  const setLanguage = (e) => {
    const { value } = e.target;
    changeLanguage(value);
  };
  return (
    <SettingsContainer>
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
            className="settingsThemeSwitcher"
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
    </SettingsContainer>
  );
};

export default Settings;
