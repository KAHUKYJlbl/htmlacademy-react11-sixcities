import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../../types/offer/offer';

export const getOffers = createAction<Offer[]>('getOffers');
