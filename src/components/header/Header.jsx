import { HeaderContainer } from '../../containers';
import {
  Navbar,
  Logo,
  ToolBox,
} from './components';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Navbar />
      <ToolBox />
    </HeaderContainer>
  );
};

Header.displayName = 'Header';

export default Header;
