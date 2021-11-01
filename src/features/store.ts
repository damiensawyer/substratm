import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {combineEpics, createEpicMiddleware} from "redux-observable";
import {ignoreElements, tap} from "rxjs";
import counterSlice,{epics as counterEpics} from "./counter.slice";
import loginSlice,{epics as loginEpics} from "./login.slice";
const rxjsEpicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: {
        counterSlice: counterSlice,
        loginSlice: loginSlice
    },
    middleware: getDefaultMiddleware => {
        // https://redux-toolkit.js.org/api/getDefaultMiddleware  does different defaults for dev and prod. Includes redux-thunk in all
        let result = getDefaultMiddleware().concat(rxjsEpicMiddleware)
        return result
    }
})

/* eslint-disable-next-line */
/** allows hooking into redux actions via rx and logging. */
function logEpic(actions: any) {
    return actions.pipe(tap(console.log), ignoreElements())
}

export const rootEpic = combineEpics(
    //logEpic, 
    ...(counterEpics as any),
    ...(loginEpics as any)
);
rxjsEpicMiddleware.run(rootEpic)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;