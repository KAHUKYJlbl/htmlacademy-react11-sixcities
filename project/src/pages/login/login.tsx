import Layout from '../../components/layout/layout';
import LoginForm from '../../components/login-form/login-form';
import RandomLocation from '../../components/random-location/random-location';

import { Offer } from '../../types/offer/offer';

type LoginProps = {
  offers: Offer[];
}

export default function Login({offers}: LoginProps) {
  return (
    <Layout wrapperClasses={['page--gray', 'page--login']}>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm />
          <RandomLocation offers={offers} />
        </div>
      </main>
    </Layout>
  );
}
