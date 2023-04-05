import { getLogin, postRegister } from 'services/user.service';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLogin = createAsyncThunk(
    'auth/login',
    async (payload) => {
        const res = await getLogin(payload);
        return res;
    }
);

export const postRegistration = createAsyncThunk(
    'auth/register',
    async (payload) => {
        const res = await postRegister(payload);
        return res;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        fweets: [],
        status: 'idle',
        error: null
    },
    extraReducers(builder) {
        builder
            .addCase(fetchLogin.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchLogin.fulfilled, (state, action) => {
                state.status = 'success';
                state.fweets = action?.payload || [];
            })
            .addCase(fetchLogin.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action?.error || {};
            })
            .addCase(postRegistration.pending, (state, action) => {
                state.signUpStatus = 'loading';
            })
            .addCase(postRegistration.fulfilled, (state, action) => {
                state.signUpStatus = 'success';
                state.fweets = action?.payload || [];
            })
            .addCase(postRegistration.rejected, (state, action) => {
                state.signUpStatus = 'failed';
                state.error = action?.error || {};
            })
    }
});

const { reducer } = authSlice;

export default reducer;