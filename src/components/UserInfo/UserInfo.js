import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';

import routes from '../../routes';
import { authOperations } from '../../redux/auth';
import { ReactComponent as SignOutIcon } from '../../assets/icons/svg/signOut.svg';
import defaultAvatar from '../../assets/images/default-avatar.png';
import styles from './UserInfo.module.css';

function UserInfo({ onOpenMobileMenu }) {
  const dispatch = useDispatch();
  // const email = useSelector(authSelectors.getUseremail);
  const avatar = defaultAvatar;
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal(prevShowModal => !prevShowModal);
  }, []);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_present', 'andray838');
    setLoading(true);
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/andray838/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );

    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <div className={styles.avatar} onClick={toggleModal}>
          {loading ? (
            <h3 className={styles.loading}>Loading...</h3>
          ) : (
            <img
              src={image || avatar}
              alt="avatar"
              width="40"
              className={styles.avatarImg}
            />
          )}
          {/* <img src={avatar} alt="avatar" width="40" className={styles.avatarImg} /> */}
          <span className={styles.dropdownCaret}></span>
          <div
            className={
              !showModal ? styles.userInfoModal : styles.userInfoModalActive
            }
          >
            <label
              htmlFor="fileUpload"
              name="file"
              className={styles.customFileUpload}
            >
              Change avatar
            </label>
            <input
              type="file"
              name="file"
              id="fileUpload"
              placeholder="Upload an image"
              onChange={uploadImage}
            />
            <p className={styles.userInfoModalText}>Change name</p>
          </div>
        </div>
        <span className={styles.name}>test@gmail.com </span>
      </div>

      <NavLink to={routes.AUTH_VIEW} onClick={() => onOpenMobileMenu(false)}>
        <SignOutIcon
          className={styles.signOutBtnLg}
          width="16px"
          height="16px"
          onClick={() => dispatch(authOperations.logOut())}
        />
      </NavLink>
    </div>
  );
}

export default UserInfo;
