import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { authOperations } from '../../redux/auth';
import s from './Auth.module.css';
import googleIcon from '../../assets/icons/google-logo.png';

export default function Auth() {
  const dispatch = useDispatch();
  const [check, setCheck] = useState('');

  const validationSchema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'At least 8 characters')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ email, password }, { resetForm }) => {
      if (check === 'login')
        dispatch(authOperations.logIn({ email, password }));
      if (check === 'register')
        dispatch(authOperations.register({ email, password }));
      return resetForm();
    },
  });
  const handleSelectFrom = e => {
    const {
      target: { dataset },
    } = e;
    const btnReg = document.getElementById('btn-register');
    const btnLog = document.getElementById('btn-login');
    if (dataset.login === 'login') {
      setCheck('login');
      btnReg.style.backgroundColor = ' #c2c1c1';
      btnLog.style.backgroundColor = 'rgb(241, 114, 10)';
    }
    if (dataset.register === 'register') {
      setCheck('register');
      btnReg.style.backgroundColor = 'rgb(241, 114, 10)';
      btnLog.style.backgroundColor = ' #c2c1c1';
    }
  };

  const togglePassword = () => {
    let el = document.getElementById('password');
    if (el.type === 'password') {
      el.type = 'text';
    } else {
      el.type = 'password';
    }
  };

  const Form = (
    <form className={s.auth_form} onSubmit={formik.handleSubmit}>
      <TextField
        fullWidth
        type="email"
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <div>
        <TextField
          fullWidth
          type="password"
          id="password"
          name="password"
          label="Password*"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <input type="checkbox" onClick={togglePassword} />
        Show password*
      </div>
      <div className={s.auth_form_btn}>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </div>
    </form>
  );

  return (
    <div className={s.auth_wrapper}>
      <p className={s.auth_warnTitle}>
        You can use google registration and login even you have created an
        account by simple way!
      </p>
      <div className={s.auth_google}>
        <a href="https://final-group-project-node.herokuapp.com/auth/google">
          <button className={s.auth_google_btn} type="submit">
            Google
          </button>
        </a>
        <img className={s.auth_google_img} src={googleIcon} alt={'gIcon'} />
      </div>
      <div className={s.auth_btnContainer}>
        <button
          id="btn-login"
          className={s.auth_btnContainer_btn}
          onClick={handleSelectFrom}
          data-login="login"
          type="click"
        >
          Login
        </button>
        <button
          id="btn-register"
          className={s.auth_btnContainer_btn}
          onClick={handleSelectFrom}
          data-register="register"
          type="click"
        >
          Register
        </button>
      </div>
      {check === 'login' && Form}
      {check === 'register' && Form}
    </div>
  );
}
