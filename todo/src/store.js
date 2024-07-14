 import {createStore , combineReducers} from 'redux';
 import { todos } from './todo/reducers';
 import { persistReducer } from 'redux-persist';
 import storage from 'redux-persist/lib/storage';

 import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

 // hooking todos to redux store 
 const reducers = {
     todos,
 };

 //persistConfig setup
 const persistConfig ={
     key : 'root',
     //localstore
     storage,
     //how to store state of application
     stateReconciler: autoMergeLevel2,
 }

 const rootReducer = combineReducers(reducers);

 //how to save and where  persistConfig
 const persistedReducer = persistReducer(persistConfig, rootReducer)

 export const configureStore =() => createStore(
     persistedReducer,
     window.__REDUX_DEVTOOLS_EXTENSION__ &&
     window.__REDUX_DEVTOOLS_EXTENSION__(),
     );



 //npm install redux-persist