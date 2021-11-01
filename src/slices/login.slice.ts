import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
    loggedIn: boolean;
}

const initialState: CounterState = {
    loggedIn: false,
};

export const counterSlice = createSlice({
    name: 'login',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        toggleLogin:(state =>{
            state.loggedIn = !state.loggedIn
        }),
        login: (state => {
            state.loggedIn = true
        }),
        logout: (state => {
            state.loggedIn = false
        })
    }
});

export const { login,logout, toggleLogin } = counterSlice.actions;
export const epics = []
export default counterSlice.reducer;
