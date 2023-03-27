import { Person } from './person';

type City = {
  location: Location;
  name: string;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: Person;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

type FavoritesByCities = {
  [city: string]: Offer[];
}

export type {Offer, FavoritesByCities, Location};
