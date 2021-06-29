import {
  patchUpdateUserName,
  patchUpdateUserAvatar,
  registerUser,
  login,
  logout,
  setToken,
  getUser,
} from '../../data/apiQueries.js';

import { toast } from 'react-toastify';

import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  logoutUserRequest,
  logoutUserSuccess,
  logoutUserError,
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserError,
  changeNameUserRequest,
  changeNameUserSuccess,
  changeNameUserError,
  changeUserAvatarRequest,
  changeUserAvatarSuccess,
  changeUserAvatarError,
} from './auth-actions';

const register = ({ email, password }) => async dispatch => {
  dispatch(registerUserRequest());
  try {
    const {
      data: { avatar },
    } = await registerUser({ email, password });
    const user = { user: { name: null, email, avatarURL: avatar } };
    toast.dark(
      `User ${email} was created , please follow to your email and confirm request`,
    );
    dispatch(registerUserSuccess(user));
  } catch (err) {
    dispatch(registerUserError(null));
  }
};

const logIn = ({ email, password }) => async dispatch => {
  dispatch(loginUserRequest());

  try {
    const { data } = await login({ email, password });
    setToken.set(data.accessToken);
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    toast.dark(`Hello dear ${email}`);
    dispatch(loginUserSuccess(data));
  } catch (err) {
    dispatch(loginUserError(err.message));
  }
};

const logInGoogle = ({
  email,
  name,
  picture,
  refreshToken,
  token,
}) => async dispatch => {
  dispatch(loginUserRequest());
  try {
    setToken.set(token);
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);
    const data = { user: { name: name, email, avatarURL: picture } };
    toast.dark(`Hello dear ${name}`);
    dispatch(loginUserSuccess(data));
  } catch (error) {
    dispatch(loginUserError(error.message));
    toast.dark(`Wrong credentials`);
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutUserRequest());
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('token');

  try {
    await logout();
    setToken.unset();
    toast.dark(`Goodbye dear user`);
    dispatch(logoutUserSuccess());
  } catch (error) {
    toast.dark(`Ups Something wrong:)`);
    dispatch(logoutUserError(error.message));
  }
};

const fetchCurrentUser = token => async dispatch => {
  setToken.set(token);
  dispatch(fetchCurrentUserRequest());

  try {
    const { data } = await getUser();
    dispatch(fetchCurrentUserSuccess(data));
    toast.dark(`Welcome current user`);
  } catch (error) {
    dispatch(fetchCurrentUserError(error.message));
    toast.dark(`Please execute login`);
  }
};
const updateName = userName => async dispatch => {
  dispatch(changeNameUserRequest());

  try {
    const {
      data: { user },
    } = await patchUpdateUserName(userName);
    toast.dark(`Name was updated`);
    dispatch(changeNameUserSuccess(user));
  } catch (error) {
    dispatch(changeNameUserError(error.message));
    toast.dark(`Wrong input symbols `);
  }
};

const updateAvatar = avatar => async dispatch => {
  dispatch(changeUserAvatarRequest());
  const {
    data: { avatarUrl },
  } = await patchUpdateUserAvatar(avatar);
  toast.dark(`Wait we are uploading `);
  try {
  } catch (error) {
    dispatch(changeUserAvatarError(error.message));
    toast.dark(`Photo must be less than 2000KB`);
  } finally {
    await dispatch(changeUserAvatarSuccess(avatarUrl));
    toast.dark(`Avatar was updated`);
  }
};

const authOperations = {
  register,
  logIn,
  logInGoogle,
  logOut,
  fetchCurrentUser,
  updateName,
  updateAvatar,
};

export default authOperations;
