export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/not-found',
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortType {
  Popular = 'Popular',
  PriceLTH = 'Price: low to high',
  PriceHTL = 'Price: high to low',
  TopRated = 'Top rated first',
}

export const CITIES = [
  'Paris',
  'Cologne',
  'Amsterdam',
  'Brussels',
  'Hamburg',
  'Dusseldorf'
];
