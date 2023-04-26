import { Cities, SortType } from '../../const';
import { appSlice, changeCurrentCity, changeCurrentSort } from './app-slice';

describe('Reducer: appSlice', () => {
  it('without additional parameters should return initial state', () => {
    expect(appSlice.reducer(void 0, {type: 'UNKNOWN_ACTION'}))
      .toEqual({currentCity: Cities.Paris, currentSort: SortType.Popular});
  });

  it('should change state currentCity to new city', () => {
    const state = {currentCity: Cities.Paris, currentSort: SortType.Popular};
    const newCity = Cities.Dusseldorf;

    expect(appSlice.reducer(state, changeCurrentCity(newCity)))
      .toEqual({currentCity: newCity, currentSort: SortType.Popular});
  });

  it('should change state currentSort to new sort', () => {
    const state = {currentCity: Cities.Paris, currentSort: SortType.Popular};
    const newSort = SortType.TopRated;

    expect(appSlice.reducer(state, changeCurrentSort(newSort)))
      .toEqual({currentCity: Cities.Paris, currentSort: newSort});
  });
});
