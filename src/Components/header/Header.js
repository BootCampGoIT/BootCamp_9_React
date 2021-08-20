import { HeaderContainer } from "./HeaderStyled";
import Navigation from "./navigation/Navigation";
import Switch from "react-switch";

const Header = ({ headerLinks, toggleTheme, theme }) => {
  return (
    <HeaderContainer>
      <a href='/#' className='headerLogo'>
        IT-education platform
      </a>
      <Navigation headerLinks={headerLinks} />
      <Switch
        onChange={toggleTheme}
        checked={theme.title === "dark"}
        onColor={theme.colors.main}
        offColor={theme.colors.active}
        checkedIcon={false}
        uncheckedIcon={false}
        height={14}
        width={34}
        handleDiameter={14}
      />
    </HeaderContainer>
  );
};

export default Header;
