import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

//redux related imports
import { Provider } from 'react-redux';
import store from './redux/Store';

//checks if the user is logged in
if (localStorage.zomatoUser) {
  const { token } = JSON.parse(localStorage.zomatoUser); //get the token
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`; //set an Authorizaiton header for all the future request that this user made using axios to backend
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
