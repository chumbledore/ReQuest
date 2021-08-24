import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../viewmodels/userVM';

interface userState {
    user: User | null
}

const initialState: userState = {
    user: null,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        
    }
})

export const userActions = userSlice.actions;

export default userSlice;