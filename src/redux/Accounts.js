import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';


const initialState = {
    loading: false,
    accounts: [],
    error: ''
};

export const fetchAccounts = createAsyncThunk('accounts/fetchAccounts', async () => {
    return axios.get('http://localhost:5000/api/v1/account')
        .then(response => response.data)
});

export const accountSlice = createSlice({
    name: 'accounts',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAccounts.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchAccounts.fulfilled, (state, action) => {
            state.loading = false;
            state.accounts = action.payload;
            state.error = '';
        });
        builder.addCase(fetchAccounts.rejected, (state, action) => {
            state.loading = false;
            state.accounts = [];
            state.error = action.error.message;
        });
    }
});

export default accountSlice.reducer;