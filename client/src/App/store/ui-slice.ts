import { createSlice } from '@reduxjs/toolkit';

interface uiState {
    useDarkTheme: boolean
};

const initialState: uiState  = {
    useDarkTheme: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        toggleTheme(state){
            state.useDarkTheme = !state.useDarkTheme;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;