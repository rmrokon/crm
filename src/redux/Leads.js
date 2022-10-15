import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    leads: [],
    error: ''
};

export const fetchLeads = createAsyncThunk('leads/fetchLeads', async () => {
    return axios.get('http://localhost:5000/api/v1/lead')
        .then(response => response.data)
});

export const leadSlice = createSlice({
    name: 'leads',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchLeads.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchLeads.fulfilled, (state, action) => {
            state.loading = false;
            state.leads = action.payload;
            state.error = '';
        });
        builder.addCase(fetchLeads.rejected, (state, action) => {
            state.loading = false;
            state.leads = [];
            state.error = action.error.message;
        })
    }
});


export default leadSlice.reducer;