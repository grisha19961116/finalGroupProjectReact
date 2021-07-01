import { toast } from 'react-toastify';
import axios from 'axios';
axios.defaults.baseURL = 'https://final-group-project-node.herokuapp.com';

const setToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const serverErr = warn =>
  toast.error(`🔥 ${warn}!`, {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const serverSuc = warn =>
  toast.success(`⚡ ${warn}`, {
    position: 'bottom-left',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const updateTokenByCode = async () => {
  try {
    const refreshToken = localStorage.getItem('refreshToken');
    if (refreshToken === null) return;
    const {
      data: { data },
    } = await axios.get(`/auth/refresh-token/${refreshToken}`);
    setToken.set(data.accessToken);
    localStorage.setItem('token', data.accessToken);
    localStorage.setItem('refreshToken', data.refreshToken);
    return;
  } catch (_e) {}
};

const getQuestions = async query => {
  try {
    const { data } = await axios.get(
      `/test/${
        query === 'theoretical' ? 'theory-questions' : 'tech-questions'
      }`,
    );
    return data;
  } catch (e) {
    if (e.message.slice(-3) === '401') return updateTokenByCode();
    if (e.message.slice(-3) !== '403')
      return serverErr('The server is temporarily down ');
  }
};

const postUserAnswers = async (nameTest, userAnswers) => {
  try {
    const dataPost = await { answers: userAnswers, nameTest };
    const { data } = await axios.post(`/test/result`, dataPost);
    return data;
  } catch (e) {
    if (e.message.slice(-3) === '401') return updateTokenByCode();
    if (e.message.slice(-3) !== '403')
      return serverErr('The server is temporarily down ');
  }
};
const patchUpdateUserName = async userName => {
  try {
    const { data } = await axios.patch('/users/current', userName);
    serverSuc('Name was updated');
    return data;
  } catch (e) {
    if (e.message.slice(-3) === '401') return updateTokenByCode();
    if (e.message.slice(-3) !== '403')
      return serverErr('The server is temporarily down ');
  }
};
const patchUpdateUserAvatar = async userAvatar => {
  try {
    const { data } = await axios.patch('/users/avatars', userAvatar);
    return data;
  } catch (e) {
    if (e.message.slice(-3) === '401') return updateTokenByCode();
    if (e.message.slice(-3) !== '403')
      return serverErr('The server is temporarily down ');
  } finally {
    serverSuc('Avatar was updated');
  }
};

const registerUser = async ({ email, password }) => {
  try {
    const { data } = await axios.post('/auth/register', { email, password });
    serverSuc(
      'User was created , please follow to your email and confirm request',
    );
    return data;
  } catch (e) {
    if (e.message.slice(-3) === '401') return updateTokenByCode();
    if (e.message.slice(-3) === '409') {
      return toast.error('❌ Email has already been using!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (e.message.slice(-3) !== '403')
      return serverErr('The server is temporarily down ');
  }
};

const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post('/auth/login', { email, password });
    return data;
  } catch (e) {
    if (e.message.slice(-3) === '401') {
      updateTokenByCode();
      return toast.error('❌ Unauthorized!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (e.message.slice(-3) !== '403')
      return serverErr('The server is temporarily down ');
  }
};

const loginGoogle = async () => {
  try {
    const data = await axios.get('/auth/google');
    return data;
  } catch (e) {
    if (e.message.slice(-3) === '401') return updateTokenByCode();
    if (e.message.slice(-3) !== '403')
      return serverErr('The server is temporarily down ');
  }
};

const logout = () => {
  try {
    axios.post('auth/logout').then(data => data);
    localStorage.removeItem('token');
    serverSuc(`Goodbye`);
  } catch (e) {
    if (e.message.slice(-3) === '401') return updateTokenByCode();
    if (e.message.slice(-3) !== '403')
      return serverErr('The server is temporarily down ');
  }
};

const getUser = async () => {
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (e) {
    if (e.message.slice(-3) === '401') return updateTokenByCode();
    if (e.message.slice(-3) !== '403')
      return serverErr('The server is temporarily down ');
  }
};

export {
  getQuestions,
  postUserAnswers,
  patchUpdateUserName,
  patchUpdateUserAvatar,
  registerUser,
  login,
  loginGoogle,
  logout,
  setToken,
  getUser,
};
