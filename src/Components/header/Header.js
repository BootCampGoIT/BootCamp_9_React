import React, { Component } from "react";
import { HeaderContainer } from "./HeaderStyled";
import Navigation from "./navigation/Navigation";

import BurgerMenu from "./burgerMenu/BurgerMenu";

class Header extends Component {
  state = {
    width: window.innerWidth,
    breakPoint: 768,
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
  }

  handleResizeWindow = () => this.setState({ width: window.innerWidth });

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeWindow);
  }

  render() {
    const { width, breakPoint } = this.state;
    return (
      <HeaderContainer>
        <a href='/#' className='headerLogo'>
          ITED
        </a>

        {width < breakPoint ? (
          <BurgerMenu
            toggleTheme={this.props.toggleTheme}
            theme={this.props.theme}
            headerLinks={this.props.headerLinks}
          />
        ) : (
          <>
            <Navigation headerLinks={this.props.headerLinks} />
          </>
        )}
      </HeaderContainer>
    );
  }
}

export default Header;
