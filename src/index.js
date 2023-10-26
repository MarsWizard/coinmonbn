import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FutureCoinBasisView from './futureCoinBasisView';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <FutureCoinBasisView asset='BTC' />
    <FutureCoinBasisView asset='ETH' />
    <FutureCoinBasisView asset='LTC' />
    <FutureCoinBasisView asset='BNB' />
    <FutureCoinBasisView asset='XRP' />
    <FutureCoinBasisView asset='DOT' />
    <FutureCoinBasisView asset='BCH' />
    <FutureCoinBasisView asset='LINK' />
    <FutureCoinBasisView asset='ADA' />
  </React.StrictMode>
  ,
  document.getElementById('root')
);
