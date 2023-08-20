import styles from './styles.module.scss';
import PropTypes from 'prop-types';
const HeaderContainer = ({ children }) => {
  return(
    <div className={styles.headerContainer}>{children}</div>
  );
}

HeaderContainer.displayName = 'HeaderContainer';

HeaderContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderContainer;
