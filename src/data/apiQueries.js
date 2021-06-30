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

const updateTokenByCode = async err => {
  try {
    if (err.slice(-3) !== '401') return;
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
    updateTokenByCode(e.message);
  }
};

const postUserAnswers = async (nameTest, userAnswers) => {
  try {
    const dataPost = await { answers: userAnswers, nameTest };
    const { data } = await axios.post(`/test/result`, dataPost);
    return data;
  } catch (e) {
    updateTokenByCode(e.message);
  }
};
const patchUpdateUserName = async userName => {
  try {
    const { data } = await axios.patch('/users/current', userName);
    return data;
  } catch (e) {
    updateTokenByCode(e.message);
  }
};
const patchUpdateUserAvatar = async userAvatar => {
  try {
    const { data } = await axios.patch('/users/avatars', userAvatar);
    return data;
  } catch (e) {
    updateTokenByCode(e.message);
  }
};

const registerUser = async ({ email, password }) => {
  try {
    const { data } = await axios.post('/auth/register', { email, password });
    return data;
  } catch (e) {
    if (e.message.slice(-3) === '409')
      return toast.error('❌ Email has already been using!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    updateTokenByCode(e.message);
  }
};

const login = async ({ email, password }) => {
  try {
    const { data } = await axios.post('/auth/login', { email, password });
    return data;
  } catch (e) {
    updateTokenByCode(e.message);
    if (e.message.slice(-3) === '401')
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
};

const loginGoogle = async () => {
  try {
    const data = await axios.get('/auth/google');
    return data;
  } catch (e) {
    updateTokenByCode(e.message);
  }
};

const logout = () => {
  try {
    axios.post('auth/logout').then(data => data);
    localStorage.removeItem('token');
  } catch (e) {
    updateTokenByCode(e.message);
  }
};

const getUser = async () => {
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (e) {
    updateTokenByCode(e.message);
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
