import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/features/configureStore';
import HomeView from './src/components/Home/HomeView';
import MockView from './src/components/MockView';

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
        {/* <MockView/> */}
      </PersistGate>
    </Provider>
  )
}
export default App;