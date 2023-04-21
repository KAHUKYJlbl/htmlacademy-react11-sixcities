import { Cities, NameSpace, SortType } from '../../const';
import { State } from '../../types/state/state';

export const getCurrentCity = (state: State): Cities => state[NameSpace.App].currentCity;

export const getCurrentSort = (state: State): SortType => state[NameSpace.App].currentSort;


