import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  leaderboardReducer
} from './slices';

const rootReducer = combineReducers({
  leaderboard: leaderboardReducer,
});


// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['constant'],
// };


// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// export const persistor = persistStore(store);

export default store;