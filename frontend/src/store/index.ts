import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import userReducer from './userSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // Local storage

// Persist configuration
const AuthPersistConfig = {
  key: 'auth',
  storage, // Stores in local storage
}

const userPersistConfig = {
  key: 'user',
  storage, // Stores in local storage
}

// Connect auth reducer with persistency
const persistedAuthReducer = persistReducer(AuthPersistConfig, authReducer)
const persistedUserReducer = persistReducer(userPersistConfig, userReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer, // Persisted version of the auth reducer
    user: persistedUserReducer, // Persisted version of the user reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// Create persistor
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
