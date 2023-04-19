import classes from './oops.module.sass';
import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';
import { fetchOffers } from '../../store/app/api-actions';
import { fetchOffer } from '../../store/room/api-actions';

type OopsProps = {
  id?: string;
}

export default function Oops({id}: OopsProps): JSX.Element {
  const dispatch = useAppDispatch();

  const mainOopsClickHandler = () => {
    dispatch(fetchOffers());
  };

  const roomOopsClickHandler = () => {
    dispatch(fetchOffer(id));
  };

  return (
    <a href="#" onClick={id ? roomOopsClickHandler : mainOopsClickHandler}>
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
