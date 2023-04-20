import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { generatePath } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppDispatch, State } from '../../types/state/state';
import { Comment } from '../../types/offer/comment';
import { APIRoute } from '../../const';

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
