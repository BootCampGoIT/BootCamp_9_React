import { useState, useEffect } from "react";
import themes from "../themes";

const persistLocalStorage = () => {
  const currentTheme = JSON.parse(localStorage.getItem("theme")); //"dark"
  return currentTheme ? themes[currentTheme] : themes.dark;
  //   return themes[currentTheme] || themes.dark;
};

export const usePersistedTheme = () => {
  const [theme, setTheme] = useState(persistLocalStorage());

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? themes.light : themes.dark);
  };
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme.title));
  }, [theme]);



  return [theme, toggleTheme]
};

 
