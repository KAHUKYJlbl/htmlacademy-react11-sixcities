export enum AppRoute {
  MainDefault = '/',
  Main = '/:city',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/not-found',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export const CITIES = [
  'Paris',
  'Cologne',
  'Amsterdam',
  'Brussels',
  'Hamburg',
  'Dusseldorf'
];
