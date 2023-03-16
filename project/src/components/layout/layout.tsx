import classNames from 'classnames';

import Header from '../header/header';
import Footer from '../footer/footer';

type LayoutProps = {
  children: JSX.Element;
  isHeaderNav?: boolean;
  isFooter?: boolean;
  wrapperClasses?: string[];
}

export default function Layout ({
  children,
  isHeaderNav = false,
  isFooter = false,
  wrapperClasses
}: LayoutProps): JSX.Element {
  return (
    <div className={classNames('page', wrapperClasses)}>
      <Header isHeaderNav={isHeaderNav} />
      {children}
      {isFooter && <Footer />}
    </div>
  );
}
