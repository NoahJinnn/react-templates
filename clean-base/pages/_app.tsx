import '../styles/globals.scss';
import '@animxyz/core';
import 'tachyons';

import { store } from '@redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { RecoilRoot } from 'recoil';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  </Provider>
);

export default MyApp;
