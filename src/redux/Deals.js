import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    deals: [],
    error: ''
}

export const fetchDeals = createAsyncThunk('deals/fetchDeals', async () => {
    return axios.get('http://localhost:5000/api/v1/deal')
        .then(response => response.data)
});

export const updateDeal = createAsyncThunk('deals/updateDeal', async (deal) => {
    return axios.put('http://localhost:5000/api/v1/deal', deal)
        .then(response => response.data)
});

export const dealSlice = createSlice({
    name: 'deals',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchDeals.pending, state => {
            state.loading = true;
        });
        builder.addCase(fetchDeals.fulfilled, (state, action) => {
            state.loading = false;
            state.deals = action.payload;
            state.error = '';
        });
        builder.addCase(fetchDeals.rejected, (state, action) => {
            state.loading = false;
            state.deals = [];
            state.error = action.error.message;
        })
    }
    // reducers: {
    //     addDeal: (state, action) => {
    //         state.deals.push(action.payload);
    //     }
    // }
});


// export const { addDeal } = dealSlice.actions;
// module.exports.fetchDeals = fetchDeals;
export default dealSlice.reducer;