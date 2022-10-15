import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    contacts: [],
    error: ''
};

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async () => {
    return axios.get('http://localhost:5000/api/v1/contact')
        .then(response => response.data)
});

export const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchContacts.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.contacts = action.payload;
            state.error = '';
        });
        builder.addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.contacts = [];
            state.error = action.error.message;
        })
    }
});

export default contactSlice.reducer;
