import axios from "axios";
import { ThemeProvider } from "styled-components";
import data from "../data";
import GlobalStyles from "../styles/globalStyles";
import themes from "../themes";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  // axios.post(`https://bc-9-4ec98-default-rtdb.firebaseio.com/user.json`, {
  //   name: "alex",
  // });
  // axios.get(`https://bc-9-4ec98-default-rtdb.firebaseio.com/user.json`);

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

// const getResult = function (x) {
//   return function () {
//     console.log(x);
//   };
// };

// const getResult = (x) => (y) => console.log(y(x));

// const callback = (value) => {
//   return 3.14 * value;
// };

// getResult(100)(callback);
