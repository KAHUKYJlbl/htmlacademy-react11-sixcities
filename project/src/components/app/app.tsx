import Main from '../../pages/main/main';

type AppScreenProps = {
  placesToStay: number;
}

export default function App({placesToStay}: AppScreenProps): JSX.Element {
  return (
    <Main
      placesToStay = {placesToStay}
    />
  );
}
