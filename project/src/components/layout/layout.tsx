import classNames from 'classnames';

import Header from '../header/header';
import Footer from '../footer/footer';

type LayoutProps = {
  children: JSX.Element;
  isHeaderNav?: boolean;
  isFooter?: boolean;
  isPageGray?: boolean;
  isPageMain?: boolean;
  isPageLogin?: boolean;
}

export default function Layout ({
  children,
  isHeaderNav = false,
  isFooter = false,
  isPageGray = false,
  isPageMain = false,
  isPageLogin = false
}: LayoutProps): JSX.Element {
  const wrapperClasses = classNames('page', {
    'page--gray': isPageGray,
    'page--main': isPageMain,
    'page--login': isPageLogin
  });

  return (
    <div className={wrapperClasses}>
      <Header isHeaderNav={isHeaderNav} />
      {children}
      {isFooter && <Footer />}
    </div>
  );
}
