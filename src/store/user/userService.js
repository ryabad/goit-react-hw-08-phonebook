import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Notiflix from 'notiflix';

// axios.defaults.baseURL = 'https://657d95bf3e3f5b189462c51b.mockapi.io';

export const fetchContactThunk = createAsyncThunk(
  'users/fetchAll',
  async (_, thunk) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'user/addContact',
  async (newContact, thunk) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      Notiflix.Notify.success('Contact has been added!');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.message);
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'user/deleteContact',
  async (contactId, thunk) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      Notiflix.Notify.info('Contact has been deleted!');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.message);
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const changeContactThunk = createAsyncThunk(
  'user/changeContact',
  async (contact, thunk) => {
    try {
      const { data } = await axios.patch(`/contacts/${contact.id}`, {
        name: contact.name,
        number: contact.number,
      });
      Notiflix.Notify.success('Contact has been changed!');
      return data;
    } catch (error) {
      Notiflix.Notify.failure(error.message);
      return thunk.rejectWithValue(error.message);
    }
  }
);
