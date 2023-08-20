import { HeaderContainer } from "../../containers";
import Navbar from './__sub-components/navbar/Navbar';
import Logo from './__sub-components/logo/Logo';
import ToolBox from './__sub-components/toolbox/ToolBox';
const Header = () => {
  return(
    <HeaderContainer>
      <Logo />
      <Navbar />
      <ToolBox />
    </HeaderContainer>
  );
};

export default Header;
