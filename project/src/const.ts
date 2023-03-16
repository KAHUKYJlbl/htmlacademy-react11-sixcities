export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
export const Cities = {
  Paris: 'Paris',
  Cologne: 'Cologne',
  Amsterdam: 'Amsterdam',
  Brussels: 'Brussels',
  Hamburg: 'Hamburg',
  Dusseldorf: 'Dusseldorf'
} as const;
