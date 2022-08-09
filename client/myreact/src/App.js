import React from 'react';
import logo from './logo.svg';
import './App.css';
import { InventoryClient, InventoryPromiseClient } from './proto-gen/books/bookshop_grpc_web_pb';

import {
  GetBookListRequest, GetBookListResponse} from './proto-gen/books/bookshop_pb';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const service = this.initOAShopAPI();
    const request = new GetBookListRequest();
    console.log("service", service);
    service.getBookList(request, {}).then(rest => {
      console.log("res", JSON.stringify(rest));
    }, error => {
      console.log("error", JSON.stringify(error));
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

  initOAShopAPI() {
    const client = new InventoryPromiseClient("http://localhost:9090", { "withCredentials": "false"}, null);
  
    // Setup for front-end grpc-web check
    // Setup for front-end grpc-web check
    const enableDevTools = '__GRPCWEB_DEVTOOLS__' in window ? window['__GRPCWEB_DEVTOOLS__'] : ((c) => { });
    enableDevTools([client]);
  
    return client;
  }
}

export default App;
