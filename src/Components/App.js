import data from "../data";
import Header from "./header/Header";
import Main from "./main/Main";

const App = () => {
  return (
    <>
      <Header headerLinks={data.header} />
      <Main courses={data.courses} />
    </>
  );
};

export default App;
