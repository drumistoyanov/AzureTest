import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigation from "./Components/Navigation.js";
import About from './Components/About';
import Shop from './Components/Shop';
import Cart from './Components/cart/Cart.js';
import Home from './Components/Home';
import Footer from './Components/Footer.tsx';

function App() {
  
  return (<BrowserRouter>
    <div className="App">

      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Shop" render={(props) => <Shop {...props} type={''} />} />
        <Route path="/About" component={About} />
        <Route path="/Cart" component={Cart} />
        <Route path="/Shop/CarAssessories" render={(props) => <Shop {...props} type={'3'} />} />
        <Route path="/Shop/WashingProducts" render={(props) => <Shop {...props} type={'4'} />} />
        <Route path="/Shop/Fruits" render={(props) => <Shop {...props} type={'1'} />} />
        <Route path="/Shop/Vegetables" render={(props) => <Shop {...props} type={'2'} />} />
      </Switch>
    </div>
  <Footer/>
  </BrowserRouter>

  );
}

export default App;
