import {

  Header
} from "../components/index.js";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return(
    <>
    <Header />
    <Outlet />
  </>
  );
}

export default Layout;
