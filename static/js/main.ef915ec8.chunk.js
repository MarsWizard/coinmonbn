(this.webpackJsonpmpui=this.webpackJsonpmpui||[]).push([[0],{136:function(t,e,a){},187:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a(45),r=a.n(s),c=(a(136),a(27)),o=a(80),i=a(81),l=a(15),u=a(84),d=a(83),b=a(103),h=a.n(b),f=a(51),y=a(18),C=a(5);function v(t){return null==t?"":t.contractCode}var p=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={nearContract:null,farContract:null,contractsDailySeries:{},nearContractDailySeries:null},n.futureWsClient=t.futureWsClient,n.swapWsClient=t.swapWsClient,console.log(t),n.setNearContract=n.setNearContract.bind(Object(l.a)(n)),n.setFarContract=n.setFarContract.bind(Object(l.a)(n)),n.setContracts=n.setContracts.bind(Object(l.a)(n)),n.nearContractCode=n.nearContractCode.bind(Object(l.a)(n)),n.dataToEvents=n.dataToEvents.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"nearContractCode",value:function(){var t=this.state.nearContract;return null==t?"":t.contractCode}},{key:"setNearContract",value:function(t){console.log(t),this.setState({nearContract:t})}},{key:"setFarContract",value:function(t){console.log(t),this.setState({farContract:t})}},{key:"setContracts",value:function(t,e){this.setState({nearContract:t,farContract:e});var a=Date.now();console.log(this.futureWsClient),this.sendQuery(t.contractCode,"1day",Math.floor(a/1e3-86400),Math.floor(a/1e3),this.futureWsClient)}},{key:"sendQuery",value:function(t,e,a,n,s){JSON.stringify({req:"market.".concat(t,".kline.").concat(e),id:"id4",from:a,to:n})}},{key:"dataToEvents",value:function(t){return t.map((function(t,e){return new y.TimeEvent(new Date(1e3*t.id),t)}))}},{key:"updateData",value:function(t){console.log(t);var e=t.rep.match(/market\.([\w\-_]+)\.kline\.1day/);if(null!=e){var a=e[1],n=this.state.contractsDailySeries;n[a]=t.data;var s=this.state.nearContractDailySeries;null!=this.state.nearContract&&a==this.state.nearContract.contractCode&&(s=new y.TimeSeries({name:"near contract daily price",columns:["time","close"],events:this.dataToEvents(t.data)})),this.setState({contractsDailySeries:n,nearContractDailySeries:s})}}},{key:"render",value:function(){var t=this.state.contractsDailySeries[this.nearContractCode()],e=null;if(null!=t&&t.length>0){var a=this.state.nearContractDailySeries;e=Object(C.jsxs)("div",{children:[Object(C.jsxs)("h2",{children:[this.state.nearContract.contractCode," Close"]}),Object(C.jsx)(f.ChartContainer,{width:800,timeRange:a.range(),children:Object(C.jsxs)(f.ChartRow,{height:"200",children:[Object(C.jsx)(f.YAxis,{id:"price",label:"Price ($)",min:0,max:a.max("close"),width:"60",format:"$,.2f"}),Object(C.jsx)(f.Charts,{children:Object(C.jsx)(f.LineChart,{columns:["close"],axis:"price",series:a})})]})})]})}return Object(C.jsxs)("div",{children:[Object(C.jsxs)("h2",{children:[v(this.state.nearContract)," vs ",v(this.state.farContract)]}),e]})}}]),a}(n.Component),j=a(186);function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return Number.parseFloat(t).toPrecision(e)}var O=function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;Object(o.a)(this,a),n=e.call(this,t);for(var s={},r=["ETH","BTC"],i=0,u=r;i<u.length;i++){s[u[i]]=null}for(var d=["-USD","_CW","_NW","_CQ","_NQ"],b=[],h={},f=0,y=r;f<y.length;f++){var C,v=y[f],p=[],j=Object(c.a)(d);try{for(j.s();!(C=j.n()).done;){var m={contractCode:v+C.value};b.push(m),p.push(m)}}catch(O){j.e(O)}finally{j.f()}h[v]=p}return n.state={count:90,prices:s,symbols:r,future_contracts:[{contract_code:"ETH_CW",symbol:"ETH"},{contract_code:"ETH_NW",symbol:"ETH"},{contract_code:"ETH_CQ",symbol:"ETH"},{contract_code:"ETH_NQ",symbol:"ETH"},{contract_code:"BTC_CW",symbol:"BTC"},{contract_code:"BTC_NW",symbol:"BTC"},{contract_code:"BTC_CQ",symbol:"BTC"},{contract_code:"BTC_NQ",symbol:"BTC"}],historyData:{},currentPair:null,contracts:b,symbolContracts:h,openPrices:{},baseAssets:["ETH","BTC"]},n.sendMessage=n.sendMessage.bind(Object(l.a)(n)),n.subscribe=n.subscribe.bind(Object(l.a)(n)),n.updatePrice=n.updatePrice.bind(Object(l.a)(n)),n.sendMessageSwap=n.sendMessageSwap.bind(Object(l.a)(n)),n.queryFutureKlineData=n.queryFutureKlineData.bind(Object(l.a)(n)),n.onClickMarketData=n.onClickMarketData.bind(Object(l.a)(n)),n.compareContracts=n.compareContracts.bind(Object(l.a)(n)),n.updateOpenPrice=n.updateOpenPrice.bind(Object(l.a)(n)),n.deliverySymbolsLoaded=n.deliverySymbolsLoaded.bind(Object(l.a)(n)),n.subscribeDeliveryContracts=n.subscribeDeliveryContracts.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"queryFutureKlineData",value:function(t,e,a,n){var s=JSON.stringify({req:"market.".concat(t,".kline.").concat(e),id:"id4",from:a,to:n});this.sendMessage(s),this.sendMessageSwap(s)}},{key:"onClickMarketData",value:function(){console.log("onClickMarketData"),this.queryFutureKlineData("ETH_CQ","1min",0,1)}},{key:"componentDidMount",value:function(){var t,e=Object(c.a)(this.state.symbols);try{for(e.s();!(t=e.n()).done;)t.value}catch(n){e.e(n)}finally{e.f()}var a=this;fetch("https://dapi.binance.com/dapi/v1/exchangeInfo").then((function(t){return t.json()})).then((function(t){a.setState({symbols:t.symbols}),a.deliverySymbolsLoaded()}))}},{key:"deliverySymbolsLoaded",value:function(){var t,e=this.state.symbolContracts,a=this.state.contracts,n=["PERPETUAL","CURRENT_QUARTER","NEXT_QUARTER"],s=Object(c.a)(this.state.baseAssets);try{for(s.s();!(t=s.n()).done;){var r,o=t.value,i=[],l=Object(c.a)(n);try{for(l.s();!(r=l.n()).done;){var u={contractCode:o+"USD_"+r.value};a.push(u),i.push(u)}}catch(d){l.e(d)}finally{l.f()}e[o]=i}}catch(d){s.e(d)}finally{s.f()}this.refWebSocket.url="wss://dstream.binance.com/stream?streams/btcusd_210924@kline_1m/btcusd_210625@kline_1m",this.refWebSocket.setupWebsocket(),this.setState({symbolContracts:e})}},{key:"subscribeDeliveryContracts",value:function(){var t,e=this.state.symbols,a=Object(c.a)(e);try{for(a.s();!(t=a.n()).done;){var n=t.value,s="market.".concat(n.symbol,"@kline_1m");s=s.toLowerCase()}}catch(r){a.e(r)}finally{a.f()}}},{key:"handleData",value:function(t){var e=JSON.parse(t);console.log(e);var a=e.data,n=a.ps+"_"+a.ct;this.updatePrice(n,parseFloat(a.k.c))}},{key:"updatePrice",value:function(t,e){var a=this.state.prices;a[t]=e,this.setState({prices:a})}},{key:"subscribe",value:function(){var t,e=Object(c.a)(this.state.symbols);try{for(e.s();!(t=e.n()).done;)for(var a=t.value,n=0,s=["CW","NW","CQ","NQ"];n<s.length;n++){var r=s[n];this.sendMessage(JSON.stringify({sub:"market.".concat(a,"_").concat(r,".kline.1day"),id:"".concat(a,"_").concat(r)}))}}catch(o){e.e(o)}finally{e.f()}}},{key:"handleOpen",value:function(){this.subscribeDeliveryContracts()}},{key:"sendMessage",value:function(t){this.refWebSocket.sendMessage(t)}},{key:"handleSwapOpen",value:function(){var t,e=new Set,a=Object(c.a)(this.state.future_contracts);try{for(a.s();!(t=a.n()).done;){var n=t.value;e.add(n.symbol)}}catch(u){a.e(u)}finally{a.f()}var s,r=Object(c.a)(e);try{for(r.s();!(s=r.n()).done;){var o=s.value,i="".concat(o,"-USD"),l="market.".concat(i,".kline.1day");this.sendMessageSwap(JSON.stringify({sub:l}))}}catch(u){r.e(u)}finally{r.f()}}},{key:"sendMessageSwap",value:function(t){this.ws_swap.sendMessage(t)}},{key:"updateOpenPrice",value:function(t,e){var a=this.state.openPrices;a[t]=e,this.setState({openPrices:a})}},{key:"handleSwapReceive",value:function(t){var e=this;t.arrayBuffer().then((function(t){var a=j.inflate(t,{to:"string"}),n=JSON.parse(a);if(n.ping)e.sendMessageSwap(JSON.stringify({pong:n.ping}));else if(n.tick){var s=n.ch.match(/market\.(([\w]+)\-([\w+]+))\.kline\.(.*)/);if(s){var r=s[2],c=s[1];"1day"==s[4]&&e.updateOpenPrice(c,n.tick.open),e.updatePrice(r,n.tick.close),e.updatePrice(c,n.tick.close)}else n.req&&e.compareView.updateData(n)}}))}},{key:"compareContracts",value:function(t,e){console.log(t+" vs "+e),this.compareView.setContracts(t,e);var a=Date.now(),n=Math.floor(a/1e3-1209600),s=Math.floor(a/1e3);this.queryFutureKlineData(t.contractCode,"1day",n,s),this.queryFutureKlineData(e.contractCode,"1day",n,s)}},{key:"render",value:function(){var t,e=this,a=(this.state.symbols,this.state.future_contracts,this.state.symbolContracts),n=[],s=Object(c.a)(this.state.baseAssets);try{for(s.s();!(t=s.n()).done;)for(var r=t.value,o=0,i=["perpetual","next_quarter","current_quarter"];o<i.length;o++){var l=i[o],u="".concat(r.toLowerCase(),"usd_").concat(l,"@continuousKline_1m");n.push(u)}}catch(y){s.e(y)}finally{s.f()}var d=n.join("/");console.log(d);var b="wss://dstream.binance.com/stream?streams="+d,f=Object(C.jsx)(h.a,{url:b,onMessage:this.handleData.bind(this),debug:!0,onOpen:this.handleOpen.bind(this),ref:function(t){e.refWebSocket=t}});return Object(C.jsxs)("div",{children:[Object.keys(a).map((function(t,n){return Object(C.jsxs)("table",{symbol:t,children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{}),Object(C.jsx)("td",{}),a[t].map((function(t,e){return Object(C.jsx)("td",{children:t.contractCode},t.contractCode)}))]})}),Object(C.jsx)("tbody",{children:a[t].map((function(n,s){return Object(C.jsxs)("tr",{children:[Object(C.jsx)("td",{children:n.contractCode}),Object(C.jsxs)("td",{children:[m(e.state.prices[n.contractCode]),"(",m(100*(e.state.prices[n.contractCode]/e.state.openPrices[n.contractCode]-1),3),"%)"]}),a[t].map((function(t,a){return Object(C.jsxs)("td",{onClick:function(){return e.compareContracts(n,t)},children:[(e.state.prices[n.contractCode]-e.state.prices[t.contractCode]).toFixed(4),"(",(e.state.prices[n.contractCode]/e.state.prices[t.contractCode]).toFixed(4),")"]})}))]},n.contract)}))})]})})),f,Object(C.jsx)(h.a,{url:"wss://api.btcgateway.pro/swap-ws",onMessage:this.handleSwapReceive.bind(this),debug:!0,onOpen:this.handleSwapOpen.bind(this),ref:function(t){e.ws_swap=t}}),Object(C.jsx)(p,{ref:function(t){return e.compareView=t},futureWsClient:f,swapWsClient:this.ws_swap})]})}}]),a}(n.Component),k=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,189)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,r=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),r(t),c(t)}))};r.a.render(Object(C.jsx)(O,{}),document.getElementById("root")),k()}},[[187,1,2]]]);
//# sourceMappingURL=main.ef915ec8.chunk.js.map