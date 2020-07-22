import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        
        <img className='homeimage' src={process.env.PUBLIC_URL + '/Images/shop.jpg'} alt=''></img>
      </div>
    );
  };
}

export default Home;
