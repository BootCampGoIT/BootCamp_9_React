import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import data from "../data";
import GlobalStyles from "../styles/globalStyles";
import themes from "../themes";
import Header from "./header/Header";
import Main from "./main/Main";

class App extends Component {
  state = {
    theme: themes.dark,
  };

  toggleTheme = () => {
    this.setState((prev) => ({
      theme: prev.theme.title === "dark" ? themes.light : themes.dark,
    }));
  };

  render() {
    return (
      <>
        <ThemeProvider theme={this.state.theme}>
          <GlobalStyles />
          <Header
            headerLinks={data.header}
            toggleTheme={this.toggleTheme}
            theme={this.state.theme}
          />
          <Main />
        </ThemeProvider>
      </>
    );
  }
}

export default App;
