import { Header } from '../components';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

Layout.displayName = 'Layout';

export default Layout;
