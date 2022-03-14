import React, { Component } from 'react';
import Websocket from 'react-websocket';

function precise(x, p = 5) {
  return Number.parseFloat(x).toPrecision(p);
}

export default class FutureCoinBasisView extends Component {
  constructor(props) {
    super(props);
    var prices = {};
    var openPrices = {};
    var contracts = [];
    var baseAsset = this.props.asset;
    var channels = [];
    for (let suffix of ["perpetual", "next_quarter", "current_quarter"]) {
      var channel = `${baseAsset.toLowerCase()}usd_${suffix}@continuousKline_1d`;
      channels.push(channel);
    }
    var strChannels = channels.join('/');
    var wsUrl = 'wss://dstream.binance.com/stream?streams=' + strChannels;

    var deliverContractSuffixes = ['PERPETUAL', 'CURRENT_QUARTER', 'NEXT_QUARTER'];

    for (let suffix of deliverContractSuffixes) {
      var contract = {
        pair: baseAsset + 'USD',
        contractCode: `${baseAsset}USD_${suffix}`,
        contractType: suffix,
      };
      contracts.push(contract);
      prices[contract] = null;
    }

    this.state = {
      asset: props.asset,
      openPrices,
      prices,
      contracts,
      wsUrl,
    }
  };

  componentDidMount() {
    var _this = this;
    fetch("https://dapi.binance.com/dapi/v1/exchangeInfo")
      .then(response => response.json())
      .then(function (data) {
        _this.setState({ 'symbols': data.symbols });
        _this.deliverySymbolsLoaded();
      });
  }

  deliverySymbolsLoaded() {
    var symbolContracts = {};
    var contracts = [];
    var deliverContractSuffixes = ['PERPETUAL', 'CURRENT_QUARTER', 'NEXT_QUARTER'];

    var baseAsset = this.state.asset;
    var currentSymbolContracts = [];
    for (let suffix of deliverContractSuffixes) {
      var contract = {
        pair: baseAsset + 'USD',
        contractCode: `${baseAsset}USD_${suffix}`,
        contractType: suffix,
      };
      contracts.push(contract);
      currentSymbolContracts.push(contract);
    }
    symbolContracts[baseAsset] = currentSymbolContracts;

    // this.setState({ symbolContracts });
  }

  handleData(data) {
    let msg = JSON.parse(data);
    var stream_data = msg.data;
    var symbol = stream_data.ps + '_' + stream_data.ct;
    this.updatePrice(symbol, parseFloat(stream_data.k.c));
    this.updateOpenPrice(symbol, parseFloat(stream_data.k.o));
  }

  updatePrice(symbol, price) {
    var prices = this.state.prices;
    prices[symbol] = price;

    this.setState({ prices });
  }

  updateOpenPrice(symbol, price) {
    var openPrices = this.state.openPrices;
    openPrices[symbol] = price;
    this.setState({ openPrices });
  }

  render() {
    const { contracts, prices, openPrices } = this.state;

    return (
      <div>
        <Websocket url={this.state.wsUrl}
          onMessage={this.handleData.bind(this)} />
        <table>
          <thead>
            <tr>
              <td></td>
              <td></td>
              {contracts.map((value, index) => {
                return <td key={"C" + value.contractCode}>{value.contractCode}</td>
              })}
            </tr>
          </thead>
          <tbody>
            {contracts.map((rContract, index) => {
              return <tr key={"R" + rContract.contractCode}>
                <td>{rContract.contractCode}</td>
                <td>
                  {precise(prices[rContract.contractCode])}
                  ({precise((prices[rContract.contractCode] / openPrices[rContract.contractCode] - 1) * 100, 3)}%)</td>
                {contracts.map((compareContract, index) => {
                  return <td key={"CC" + rContract.contractCode + compareContract.contractCode}>
                    {(prices[rContract.contractCode] - prices[compareContract.contractCode]).toFixed(4)}
                    ({(prices[rContract.contractCode] / prices[compareContract.contractCode]).toFixed(4)})
                  </td>
                })}
              </tr>
            })}
          </tbody>
        </table>
      </div>

    )
  }
}