
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Homepage from './Homepage';
import Products from './Products';
import ProductDetail from './ProductDetail';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <div className="content-container">
          <Route path="/" exact component={Homepage}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/products/:id" component={ProductDetail}/>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;