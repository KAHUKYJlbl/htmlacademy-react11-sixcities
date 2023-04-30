import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/store-hooks/use-app-selector';

import Layout from '../../components/layout/layout';
import LoginForm from '../../components/login-form/login-form';
import RandomLocation from '../../components/random-location/random-location';
import { getAuthStatus } from '../../store/user/selectors';
import { AppRoute } from '../../const';

export default function Login() {
  const authStatus = useAppSelector(getAuthStatus);

  if (authStatus.auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  return (
    <Layout wrapperClasses={['page--gray', 'page--login']}>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <RandomLocation />
        </div>
      </main>
    </Layout>
  );
}
