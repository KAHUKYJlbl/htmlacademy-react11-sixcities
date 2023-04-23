import { useAppDispatch } from '../../hooks/store-hooks/use -app-dispatch';

import classes from './oops.module.sass';
import { fetchOffers } from '../../store/offers/api-actions';
import { fetchOffer } from '../../store/room/api-actions';
import { fetchFavorites } from '../../store/favorites/api-actions';

type OopsProps = {
  type: 'main' | 'room' | 'favorites';
  arg?: string;
}

export default function Oops({type, arg}: OopsProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleOopsClick = () => {
    switch (type) {
      case 'main':
        dispatch(fetchOffers());
        break;
      case 'favorites':
        dispatch(fetchFavorites());
        break;
      case 'room':
        dispatch(fetchOffer(arg));
        break;
    }
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
