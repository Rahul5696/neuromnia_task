import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    domain: '',
    level: '',
    message: '',
    code: '',
    data: [],
    domainOptions: [],
    levelOptions: [],
}

export const mileStoneSlice = createSlice({
    name: 'milestone',
    initialState,
    reducers: {
        setDomainOptions: (state, action) => {
            state.domainOptions = action.payload;
        },
        setData: (state, action) => {
            state.data = action.payload;
        },
        setLevelOptions: (state, action) => {
            state.levelOptions = action.payload;
        },
        setMessage: (state, action) => {
            state.message = action.payload;
        },
        setCode: (state, action) => {
            state.code = action.payload;
        },
        setLevel: (state, action) => {
            state.level = action.payload;
        },
        setDomain: (state, action) => {
            state.domain = action.payload;
        },
        resetState: (state) => {
            state.domain = '';
            state.level = '';
            state.message = '';
            state.code = '';
            state.data = [];
        }
    },
})

// Action creators are generated for each case reducer function
export const { setDomainOptions, setLevelOptions, setDomain, setLevel, setCode, setMessage, setData, resetState } = mileStoneSlice.actions;

export default mileStoneSlice.reducer;