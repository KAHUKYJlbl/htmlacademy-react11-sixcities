import Main from '../../pages/main/main';

type AppScreenProps = {
  PlacesToStayTotalCount: number;
  PlacesToStayShownCount: number;
}

export default function App({PlacesToStayTotalCount, PlacesToStayShownCount}: AppScreenProps): JSX.Element {
  return (
    <Main PlacesToStayTotalCount={PlacesToStayTotalCount} PlacesToStayShownCount={PlacesToStayShownCount} />
  );
}
