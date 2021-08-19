import { ThemeProvider } from "styled-components";
import data from "../data";
import GlobalStyles from "../styles/globalStyles";
import themes from "../themes";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  return (
    <>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyles />
        <Header headerLinks={data.header} />
        <Main courses={data.courses} />
      </ThemeProvider>
    </>
  );
};

export default App;
