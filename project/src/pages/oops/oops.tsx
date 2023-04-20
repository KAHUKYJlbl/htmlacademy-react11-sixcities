import classes from './oops.module.sass';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import { fetchOffers } from '../../store/offers/api-actions';

export default function Oops (): JSX.Element {
  const dispatch = useAppDispatch();

  const oopsClickHandler = () => {
    dispatch(fetchOffers());
  };

  return (
    <a href="#" onClick={oopsClickHandler}>
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
    </a>
  );
}
