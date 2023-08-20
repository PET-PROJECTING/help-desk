import LogoSvg from '../../../../assets/images/svg/logo.svg';
import { Link } from 'react-router-dom';
import { LINKS } from '../../../../constants';
import styles from './styles.module.scss';

const Logo = () => {
  return (
    <Link to={LINKS.ROOT}>
      <img src={LogoSvg} alt='LogoSvg' className={styles.logoImage}/>
    </Link>
  );
};

Logo.displayName = 'Logo';

export default Logo;
