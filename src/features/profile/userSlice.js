import { getUserById } from 'services/user.service';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
    'user',
    async (id) => {
        const res = await getUserById(id);
        return res;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        status: 'idle',
        error: null
    },
    extraReducers(builder) {
        builder
            .addCase(fetchUser.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'success';
                state.users = action?.payload || [];
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.status = 'failed';
                state.users = action?.error || {};
            })
    }
});

const { reducer } = userSlice;

export default reducer;