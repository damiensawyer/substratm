import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {combineEpics, createEpicMiddleware} from "redux-observable";
// import settingsSlice from './../features/Settings/settingsSlice'
// import pingSlice, {epics as pingPongEpics} from "../features/LearningReactPatterns/PingPong/PingPongSlice"
// import {combineEpics, createEpicMiddleware} from 'redux-observable';
// import {ignoreElements, tap} from "rxjs/operators";
import counterSlice,{epics as counterEpics} from "./counter.slice";
// import * as EnvironmentFunctions from "./environmentFunctions";
// import LoginSlice, {epics as loginEpics} from "../features/Login/LoginSlice";
// import { Storage } from '@ionic/storage';
// import StorageSlice,{epics as storageEpics} from "../features/Storage/storageSlice";
const rxjsEpicMiddleware = createEpicMiddleware();


export const store = configureStore({
    reducer: {
        // settingsSlice : settingsSlice,
        // pingPong: pingSlice,
        counterSlice: counterSlice,
        // loginSlice : LoginSlice,
        // storageSlice : StorageSlice
    },
    //devTools: EnvironmentFunctions.IsProduction() ? false : true, // is is the redux devtools integration ENHANCEMENT
    middleware: getDefaultMiddleware => {
        // https://redux-toolkit.js.org/api/getDefaultMiddleware  does different defaults for dev and prod. Includes redux-thunk in all
        let result = getDefaultMiddleware().concat(rxjsEpicMiddleware)
        // if (!EnvironmentFunctions.IsProduction()) {
        //     // don't need the redux-logger if you're using the redux devtools above... but wanted to show how to do an optional middlewear inclusion
        //     //result = result.concat(logger) // This is redux logger which is MIDDLEWEAR. It logs previous and next state to the console on every change.  
        // }
        return result
    }

})

async function configureStorage(){
    let storage = new Storage()
    await storage.create()
}

/* eslint-disable-next-line */
// function logEpic(actions: any) {
//     return actions.pipe(tap(console.log), ignoreElements())
// }


export const rootEpic = combineEpics(
    //logEpic, 
    ...(counterEpics as any),
    // ...(pingPongEpics as any),
);
rxjsEpicMiddleware.run(rootEpic)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
