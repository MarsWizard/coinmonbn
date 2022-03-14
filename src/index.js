import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FutureCoinBasisView from './futureCoinBasisView';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <FutureCoinBasisView asset='BTC' />
    <FutureCoinBasisView asset='ETH' />
    <FutureCoinBasisView asset='BNB' />
    <FutureCoinBasisView asset='XRP' />
    <FutureCoinBasisView asset='ADA' />
    <FutureCoinBasisView asset='LUNA' />
    <FutureCoinBasisView asset='SOL' />
    <FutureCoinBasisView asset='DOT' />
    <FutureCoinBasisView asset='DOGE' />
    <FutureCoinBasisView asset='SHIB' />
    <FutureCoinBasisView asset='LTC' />
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
