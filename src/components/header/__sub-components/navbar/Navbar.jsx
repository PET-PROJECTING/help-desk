import Link from '../link/Link';
import { LINKS } from '../../../../constants';
import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to={LINKS.ROOT}>Home</Link>
      <Link to={LINKS.CUSTOMERS}>Customers</Link>
      <Link to={LINKS.PRODUCTS}>Products</Link>
    </nav>
  );
};

Navbar.displayName = 'Navbar';

export default Navbar;
