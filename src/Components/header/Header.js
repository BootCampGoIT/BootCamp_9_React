import { HeaderContainer } from "./HeaderStyled";
import Navigation from "./navigation/Navigation";

const Header = ({ headerLinks }) => {
  return (
    <HeaderContainer>
      <a href='/#' className='headerLogo'>
        IT-education platform
      </a>
      <Navigation headerLinks={headerLinks} />
    </HeaderContainer>
  );
};

export default Header;
