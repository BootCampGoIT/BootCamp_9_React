import { useState, useEffect } from "react";
import { languages } from "../languages";

const usePersistedLanguage = () => {
  const [language, setLanguage] = useState(() => {
    const currentLanguage = JSON.parse(localStorage.getItem("language"));
    return languages[currentLanguage] || languages.ukrainian;
  });

  const changeLanguage = (lang) => {
    setLanguage(languages[lang]);
  };
  useEffect(() => {
    localStorage.setItem("language", JSON.stringify(language.title));
  }, [language]);

  return [language, changeLanguage];
};

export default usePersistedLanguage;
