import Auth from '../../components/Auth';
import s from './AuthView.module.css';

const AuthView = () => {
  return (
    <div className={s.authView_wrapper}>
      <div className={s.authView_description}>
        <h1 className={s.authView_description_title}>Pro Test</h1>
        <p className={s.authView_description_help}>
          <span>[</span> We will help you find weak points in knowledge so that
          you can strengthen it. We will show you what is relevant to know for a{' '}
          <span>QA Engineer</span> and will try to make the learning process
          more diverse_ <span>]</span>
        </p>
      </div>
      <Auth />
    </div>
  );
};

export default AuthView;
