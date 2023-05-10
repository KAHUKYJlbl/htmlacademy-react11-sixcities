import { Watch } from 'react-loader-spinner';
import classes from './loading-spinner.module.css';

const spinnerTypes = {
  page: {
    height: '240',
    width: '240',
    wrapperHeight: '100vh',
    color: '#007bff',
  },
  button: {
    height: '15',
    width: '15',
    wrapperHeight: '100%',
    color: '#ffffcc',
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
      color={spinnerTypes[spinnerType].color}
      ariaLabel="watch-loading"
      wrapperStyle={{height: spinnerTypes[spinnerType].wrapperHeight}}
      wrapperClass={classes.container}
      visible
    />
  );
}
