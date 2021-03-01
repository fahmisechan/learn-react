import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import Product from './product/Product.js';
// import  rootReducer  from './redux/reducer/Redux.js';
// import {createStore} from 'redux';

// Provider adalah membungkus component yg bisa di beri global state , Provider membutuhkan store

// fungsi createStore adalah untuk membuat state menjadi global state

// const store = createStore(rootReducer);
  
ReactDOM.render(
  // <Provider store={store}> 
  //   <Product />
  //   </Provider>,
    <Product />,
  document.getElementById('root')
);

