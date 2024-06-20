import { configureStore } from '@reduxjs/toolkit'
import counterreducer from './slice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';



const persistConfig = {
    key: 'root',
    storage,
  };
const persistedReducer = persistReducer(persistConfig, counterreducer)

const store = configureStore({
    reducer: {
      counter: persistedReducer,
    },
  });

  export const persistor = persistStore(store)
  export default store