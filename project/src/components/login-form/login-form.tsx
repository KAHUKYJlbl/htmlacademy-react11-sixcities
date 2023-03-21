import { useState } from 'react';

export default function LoginForm (): JSX.Element {
  const [token, setToken] = useState({
    login: '',
    password: '',
  });

  const handleLoginInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setToken({
      ...token,
      login: evt.target.value
    });
  };

  const handlePasswordInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setToken({
      ...token,
      password: evt.target.value
    });
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    setToken({
      login: '',
      password: '',
    });
  };

  return (
    <section className="login">
      <h1 className="login__title">Sign in</h1>
      <form
        className="login__form form"
        action="#"
        method="post"
        onSubmit={handleFormSubmit}
      >
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">E-mail</label>
          <input
            className="login__input form__input"
            type="email" name="email"
            placeholder="Email"
            required
            value={token.login}
            onInput={handleLoginInput}
          />
        </div>
        <div className="login__input-wrapper form__input-wrapper">
          <label className="visually-hidden">Password</label>
          <input
            className="login__input form__input"
            type="password"
            name="password"
            placeholder="Password"
            required
            value={token.password}
            onInput={handlePasswordInput}

          />
        </div>
        <button className="login__submit form__submit button" type="submit">Sign in</button>
      </form>
    </section>
  );
}
