export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/not-found',
}

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  Room = 'ROOM',
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
export enum FetchStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Success = 'Success',
  Failed = 'Failed',
}

export enum SortType {
  Popular = 'Popular',
  PriceLTH = 'Price: low to high',
  PriceHTL = 'Price: high to low',
  TopRated = 'Top rated first',
}

export enum Cities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Amsterdam = 'Amsterdam',
  Brussels = 'Brussels',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}
