import React, { useState } from 'react';
import HomeView from './src/components/Home/HomeView';
import { Provider } from 'react-redux';
import Store from './src/features/store';

const App = () => {
const store = Store()

  return (
    <Provider
      store = {store}
    >
      <HomeView/>
    </Provider>
  )
}
export default App;