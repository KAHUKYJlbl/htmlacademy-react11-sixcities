import Main from '../../pages/main/main';

type AppScreenProps = {
  placesToStayTotalCount: number;
  placesToStayShownCount: number;
}

export default function App({placesToStayTotalCount, placesToStayShownCount}: AppScreenProps): JSX.Element {
  return (
    <Main placesToStayTotalCount={placesToStayTotalCount} placesToStayShownCount={placesToStayShownCount} />
  );
}
