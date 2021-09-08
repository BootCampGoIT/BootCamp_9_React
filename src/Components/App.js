import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globalStyles";
import Header from "./header/Header";
import usePersistedLanguage from "../hooks/usePersistedLanguage";
import { usePersistedTheme } from "../hooks/usePersistedTheme";
import Main from "./main/Main";

export const CustomTheme = createContext();
export const CustomLanguage = createContext();

export const TransferContent = createContext();

const App = () => {
  const [theme, changeTheme] = usePersistedTheme();
  const [language, changeLanguage] = usePersistedLanguage();
  // ======== redux State || Global state==========
  const [transferContent, seTransferContent] = useState(null);
  const setContent = (data) =>
    seTransferContent((prev) => ({ ...prev, ...data }));
  // ==================
  return (
    <>
      <TransferContent.Provider value={{ transferContent, setContent }}>
        <CustomLanguage.Provider value={{ language, changeLanguage }}>
          <CustomTheme.Provider value={{ theme, changeTheme }}>
            <ThemeProvider theme={theme}>
              <GlobalStyles />
              <Header />
              <Main />
            </ThemeProvider>
          </CustomTheme.Provider>
        </CustomLanguage.Provider>
      </TransferContent.Provider>
    </>
  );
};

export default App;
