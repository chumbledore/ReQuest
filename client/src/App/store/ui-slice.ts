import { createSlice } from '@reduxjs/toolkit';

interface uiState {
    useDarkTheme: boolean,
    sideDrawerOpen: boolean
};

const initialState: uiState  = {
    useDarkTheme: true,
    sideDrawerOpen: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        toggleTheme(state){
            state.useDarkTheme = !state.useDarkTheme;
        },
        toggleSideDrawer(state){
            state.sideDrawerOpen = !state.sideDrawerOpen;
        }
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;