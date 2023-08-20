import Avatar from '../../../../assets/images/jpeg/ava1.jpeg';
import styles from './styles.module.scss';
const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.imageContainer}>
        <img src={Avatar} alt='Avatar' className={styles.profileImage} />
      </div>
      <div className={styles.userFullName}>User Name</div>
    </div>
  );
};

Profile.displayName = 'Profile';

export default Profile;
