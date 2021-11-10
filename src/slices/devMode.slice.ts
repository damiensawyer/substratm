import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {interval, Observable, pipe} from "rxjs"
import {bufferCount, bufferToggle, catchError, endWith, filter, mapTo, mergeMap, raceWith, startWith, switchMap} from "rxjs/operators";
import {ofType, StateObservable} from "redux-observable";
import * as rxjs from "rxjs"
export interface DevModeState {
  isDevMode: boolean
}

const initialState: DevModeState = {
  isDevMode:true
};

export const devModeSlice = createSlice({
  name: 'login',
  initialState,
  
  reducers: {
    tapLogoForDevMode: (state, action: PayloadAction<void>) => {
    },
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

const windowTime = 2000
const tapsToTrigger = 5 // Tapping five times within windowTime ms will toggle developer mode.

export const enableDeveloperModerEpic = (action$: any, state: any) => action$.pipe(
    ofType(tapLogoForDevMode),
    pipe(
        bufferToggle(action$.pipe(ofType(tapLogoForDevMode)), // This obs is the start of a window. 
            // This obs triggers the closing of a window. Either after the time has elapsed or we receive the specified number of taps. Note that the subscription for the 'raced' observable is added with each window. 
            () => interval(windowTime).pipe(raceWith(
                action$.pipe(ofType(toggleDevMode)), // When we actually toggle, then reset all the buffers. Otherwise, after you toggle, immediately subsequent taps inside the timer window will toggle back.
                action$.pipe(ofType(tapLogoForDevMode), bufferCount(tapsToTrigger - 1) // -1 because we needed one to trigger it. This is buffering the taps since the window started.   
                ))
            )),
        // after the observable closes, filter on the clicks inside the window which triggered it. 
        filter(x => x.length >= tapsToTrigger)),
    mapTo(toggleDevMode())
);

export const { toggleDevMode,devModeOff,devModeOn, tapLogoForDevMode } = devModeSlice.actions;
export const epics = [enableDeveloperModerEpic];
export default devModeSlice.reducer;
