import { configureStore } from '@reduxjs/toolkit';

// slices
import appStoorage from './slices/appStoorage';

const store = configureStore({
    reducer: {
        appStoorage
    }
})

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;