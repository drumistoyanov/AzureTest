import React, { Component } from 'react';
import '../App.css';

class Footer extends Component {
  render() {
    return (
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <small>Copyright &copy; 2020</small>
        </div>
      </footer>
    );
  };
}

export default Footer;
