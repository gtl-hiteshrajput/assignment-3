import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addFweet, getFweet, getFweets } from 'services/fweet.service';

export const getTweetsThunk = createAsyncThunk(
    'fweets/getFweets',
    async () => {
        const res = await getFweets();
        return res;
    }
);

export const getTweetThunk = createAsyncThunk(
    'fweets/getFweet',
    async (id) => {
        const res = await getFweet(id);
        return res;
    }
);

export const addFweetThunk = createAsyncThunk(
    'fweets/addFweet',
    async (payload) => {
        const res = await addFweet(payload);
        return res;
    }
);

const fweetSlice = createSlice({
    name: 'fweet',
    initialState: {
        fweets: [],
        status: 'idle',
        error: null
    },
    extraReducers(builder) {
        builder
            .addCase(getTweetsThunk.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getTweetsThunk.fulfilled, (state, action) => {
                state.status = 'success';
                state.fweets = action?.payload || [];
            })
            .addCase(getTweetsThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action?.error || {};
            })
            .addCase(getTweetThunk.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(getTweetThunk.fulfilled, (state, action) => {
                state.status = 'success';
                state.fweets = action?.payload || [];
            })
            .addCase(getTweetThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action?.error || {};
            })
            .addCase(addFweetThunk.pending, (state, action) => {
                state.addFweetStatus = 'loading';
            })
            .addCase(addFweetThunk.fulfilled, (state, action) => {
                state.addFweetStatus = 'success';
                state.fweets = action?.payload || [];
            })
            .addCase(addFweetThunk.rejected, (state, action) => {
                state.addFweetStatus = 'failed';
                state.error = action?.error || {};
            })
    }
});

const { reducer } = fweetSlice;

export default reducer;