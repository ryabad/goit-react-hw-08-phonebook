import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import {
  addContactThunk,
  changeContactThunk,
  deleteContactThunk,
  fetchContactThunk,
} from './userService';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContactThunk.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.user.push(action.payload);
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        const index = state.user.findIndex(
          user => user.id === action.payload.id
        );
        state.user.splice(index, 1);
      })
      .addCase(changeContactThunk.fulfilled, (state, action) => {
        const index = state.user.findIndex(
          user => user.id === action.payload.id
        );

        state.user[index] = {
          ...state.user[index],
          name: action.payload.name,
          number: action.payload.number,
        };
      })
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('fulfilled'), handleFulfilled)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const userReducer = userSlice.reducer;
