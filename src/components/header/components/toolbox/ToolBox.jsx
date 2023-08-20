import SearchField from '../search-field/SearchField';
import Profile from '../profile/Profile';
import styles from './styles.module.scss';

const ToolBox = () => {
  return (
    <div className={styles.toolboxContainer}>
      <SearchField />
      <Profile />
    </div>
  );
};

ToolBox.displayName = 'ToolBox';

export default ToolBox;
