import React, { useState } from 'react';
import HomeView from './src/components/Home/HomeView';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/features/configureStore';

const App = () => {

  return (
    <Provider
      store = {store}
    >
      <PersistGate
        loading = {null}
        persistor = {persistor}
      >
        <HomeView/>
      </PersistGate>
    </Provider>
  )
}
export default App;