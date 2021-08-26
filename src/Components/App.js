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

  componentDidMount() {
    const currentTheme = JSON.parse(localStorage.getItem("theme"));
    if (currentTheme === "dark") {
      this.setState({ theme: themes.dark });
    } else this.setState({ theme: themes.light });
  }

  componentDidUpdate() {
    localStorage.setItem("theme", JSON.stringify(this.state.theme.title));
  }
  
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
