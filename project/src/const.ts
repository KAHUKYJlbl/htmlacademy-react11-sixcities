export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id',
  NotFound = '/not-found',
}

export enum APIRoute {
  Offers = '/hotels',
  Offer = '/hotels/:hotelId',
  Nearby = '/hotels/:hotelId/nearby',
  Comments = '/comments/:hotelId',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  App = 'APP',
  User = 'USER',
  Offers = 'OFFERS',
  Room = 'ROOM',
  Comments = 'COMMENTS',
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
