import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store'
import MainNavigation from './src/navigation/MainNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation/>
    </Provider>
  );
}


