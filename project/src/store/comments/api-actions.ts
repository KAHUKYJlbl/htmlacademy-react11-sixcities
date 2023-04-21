import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { generatePath } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppDispatch, State } from '../../types/state/state';
import { Comment } from '../../types/offer/comment';

import { APIRoute, AppRoute } from '../../const';
import { redirectToRoute } from '../actions/app-actions';

export const fetchComments = createAsyncThunk<Comment[], string | undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'room/fetchComments',
  async (id = '0', {dispatch, extra: axios}) => {
    try {
      const {data} = await axios.get<Comment[]>(generatePath(APIRoute.Comments, { hotelId: id }));
      return data;
    } catch (err) {
      toast.error('Comments loading failed.', {position: toast.POSITION.BOTTOM_RIGHT});
      throw err;
    }
  },
);

export const postNewComment = createAsyncThunk<
Comment[],
  {id: string | undefined; comment: string; rating: number},
  {dispatch: AppDispatch; state: State; extra: AxiosInstance}
>(
  'room/postNewComment',
  async ({id = '0', comment, rating}, {dispatch, extra: axios}) => {
    try {
      const {data} = await axios.post<Comment[]>(generatePath(APIRoute.Comments, { hotelId: id }), {comment, rating});
      return data;
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 400) {
        toast.error('Comment not posted. Please type comment and choose rating');
      }

      if (error instanceof AxiosError && error.response?.status === 401) {
        dispatch(redirectToRoute(AppRoute.Login));
        toast.error('Could not post. Please log in');
      }

      throw error;
    }
  },
);
