import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import Header from "./header/Header";
import usePersistedLanguage from "./hooks/usePersistedLanguage";
import { usePersistedTheme } from "./hooks/usePersistedTheme";
import Main from "./main/Main";

export const CustomTheme = createContext();
export const CustomLanguage = createContext();

const App = () => {
  const [theme, changeTheme] = usePersistedTheme();
  const [language, changeLanguage] = usePersistedLanguage();
  return (
    <>
      <CustomLanguage.Provider value={{ language, changeLanguage }}>
        <CustomTheme.Provider value={{ theme, changeTheme }}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header />
            <Main />
          </ThemeProvider>
        </CustomTheme.Provider>
      </CustomLanguage.Provider>
    </>
  );
};

export default App;
