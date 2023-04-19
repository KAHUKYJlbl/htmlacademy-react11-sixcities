import classes from './oops.module.sass';
import { Link } from 'react-router-dom';

export default function Oops (): JSX.Element {
  return (
    <Link to="/">
      <div className={classes.container}>
        <figure>
          <figcaption>
            <span className={classes.o}></span>
            <span className={classes.o}></span>
            <span className={classes.p}></span>
            <span className={classes.s}></span>
            <span className={classes.wow}></span>
          </figcaption>
        </figure>
      </div>
    </Link>
  );
}
