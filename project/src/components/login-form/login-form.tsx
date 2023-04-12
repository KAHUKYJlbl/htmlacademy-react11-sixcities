import { useState } from 'react';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';

import classes from './login-form.module.sass';
import { login } from '../../store/actions/api-actions';

type FormInputData = {
  label: string;
  value: string;
  regexp: RegExp;
  isError: boolean;
  errorMessage: string;
}

const formInitialState = {
  email: {
    label: 'E-mail',
    value: '',
    regexp: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    isError: false,
    errorMessage: 'Valid e-mail required'
  },
  password: {
    label: 'Password',
    value: '',
    regexp: /^(?=.*[0-9])(?=.*[a-zA-Z]).{2,}$/,
    isError: false,
    errorMessage: 'At least one digit and one letter required'
  },
};

export default function LoginForm (): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState < Record <string, FormInputData> > (formInitialState);

  const handleFormDataChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;

    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        isError: !formData[name].regexp.test(value),
        value: value,
      }
    });
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!formData.email.isError && !formData.password.isError) {
      dispatch(login({
        login: formData.email.value,
        password: formData.password.value,
      }));

      setFormData({
        email: {...formData.email, value: ''},
        password: {...formData.password, value: ''},
      });
    }
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
        {Object.keys(formData).map((input) => {
          const {label, value, isError, errorMessage} = formData[input];
          return (
            <div key={input} className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">{label}</label>
              <input
                className="login__input form__input"
                type={input}
                name={input}
                placeholder={label}
                required
                value={value}
                onChange={handleFormDataChange}
              />
              {isError && <p className={classes.error}>{errorMessage}</p>}
            </div>
          );
        })}
        <button
          className="login__submit form__submit button"
          type="submit"
          disabled={formData.password.isError || formData.email.isError}
        >
        Sign in
        </button>
      </form>
    </section>
  );
}
