import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import classes from './oops.module.sass';
import { fetchOffers } from '../../store/app/api-actions';

export default function Oops(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleOopsClick = () => {
    dispatch(fetchOffers());
  };

  return (
    <div className={classes.containeroops} onClick={handleOopsClick}>
      <figure className={classes.figureoops}>
        <figcaption className={classes.figcaptionoops} title="Try again">
          <span className={classes.o}></span>
          <span className={classes.o}></span>
          <span className={classes.p}></span>
          <span className={classes.s}></span>
          <span className={classes.wow}></span>
        </figcaption>
      </figure>
    </div>
  );
}
