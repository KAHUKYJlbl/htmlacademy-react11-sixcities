import Layout from '../../components/layout/layout';
import LoginForm from '../../components/login-form/login-form';
import RandomLocation from '../../components/random-location/random-location';

export default function Login() {
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
