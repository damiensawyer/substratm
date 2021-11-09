import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DevModeState {
  isDevMode: boolean
}

const initialState: DevModeState = {
  isDevMode:false
};

export const devModeSlice = createSlice({
  name: 'login',
  initialState,
  
  reducers: {
    toggleDevMode: (state) => {
      state.isDevMode = !state.isDevMode;
    },
    devModeOn: (state) => {
      state.isDevMode = true;
    },
    devModeOff: (state) => {
      state.isDevMode = false;
    },
  },
});

export const { toggleDevMode,devModeOff,devModeOn } = devModeSlice.actions;
export const epics = [];
export default devModeSlice.reducer;
