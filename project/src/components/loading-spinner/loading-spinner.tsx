import { Watch } from 'react-loader-spinner';
import classes from './loading-spinner.module.sass';

const spinnerTypes = {
  page: {
    height: '240',
    width: '240',
    wrapperHeight: '100vh',
  },
  button: {
    height: '24',
    width: '24',
    wrapperHeight: '100%',
  }
};

type LoadingSpinnerProps = {
  spinnerType: keyof typeof spinnerTypes;
}

export default function LoadingSpinner ({spinnerType}: LoadingSpinnerProps): JSX.Element {
  return (
    <Watch
      height={spinnerTypes[spinnerType].height}
      width={spinnerTypes[spinnerType].width}
      radius="48"
      color="#007bff"
      ariaLabel="watch-loading"
      wrapperStyle={{height: spinnerTypes[spinnerType].wrapperHeight}}
      wrapperClass={classes.container}
      visible
    />
  );
}
