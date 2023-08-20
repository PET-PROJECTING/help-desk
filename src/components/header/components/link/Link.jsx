import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import styles from './styles.module.scss';
import PropTypes from 'prop-types';

const Link = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(styles.link, { [styles.active]: isActive } )}
    >
      {children}
    </NavLink>
  );
};

Link.displayName = 'Link';

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
