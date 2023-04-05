import { configureStore } from '@reduxjs/toolkit';
import userSlice from 'features/profile/userSlice';
import fweetSlice from 'features/dashboard/fweetSlice';
import authSlice from 'features/authentication/authSlice';

const store = configureStore({
    reducer: {
        fweet: fweetSlice,
        auth: authSlice,
        user: userSlice
    }
});

export default store;
