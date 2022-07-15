import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import RootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['filters']
}

const persistedReducer = persistReducer(persistConfig, RootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)