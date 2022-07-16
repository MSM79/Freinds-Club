import '../styles/globals.css';
import React from 'react';
import { store } from '../store/store';
import { Provider } from 'react-redux';
import Load from '../ui/components/Load';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Load>
        <Component {...pageProps} />
      </Load>
    </Provider>
  );
}

export default MyApp;
