import { configureStore } from '@reduxjs/toolkit';
import mileStoneReducer, { setDomainOptions, setLevelOptions, setDomain, setLevel, setCode, setMessage, setData, resetState } from './slices/mileStoneSlice';

export const store = configureStore({
    reducer: {
        mileStoneData: mileStoneReducer,
    }
});

export { setDomainOptions, setLevelOptions, setDomain, setLevel, setCode, setMessage, setData, resetState };