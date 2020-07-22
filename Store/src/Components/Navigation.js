import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
class NavDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
  }
  showDropdown(e) {
    e.preventDefault();
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  render() {
    const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '')
    return (
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown"
          aria-haspopup="true" aria-expanded="false"
          onClick={(e) => { this.showDropdown(e) }}>
          {this.props.name}
        </a>
        <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
          {this.props.children}
        </div>
      </li>
    )
  }
}
class Navigation extends React.Component {

  render() {

    this.props.cartUpdated();

    let total = 0;

    this.props.cart.map(item => total += item.product.price * item.quantity);

    return (
      <nav className="navbar navbar-expand-lg navbar-light " id="grad1">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
              <NavLink className="navbar-brand" to="/">Home</NavLink>
              <NavLink className="navbar-brand" to="/Shop" >Shop</NavLink>
         
            <NavDropdown className="navbar-brand" name="Choose product type">
              <NavLink className="dropdown-item" to="/Shop/CarAssessories">Car Assessories</NavLink>
              <NavLink className="dropdown-item" to="/Shop/WashingProducts" >Washing Products</NavLink>
              <NavLink className="dropdown-item" to="/Shop/Fruits" >Fruits</NavLink>
              <NavLink className="dropdown-item" to="/Shop/Vegetables" >Vegetables</NavLink>
            </NavDropdown>
            </ul>
            <NavLink className="cart" to="/Cart" >
                {
                  this.props.cart.length > 0 ? (
                    <span className="label label-info">{this.props.cart.length} items: (${total.toFixed(2)})</span>
                  ) : null
                }
               <i className="fa fa-shopping-cart"></i> My Cart</NavLink>
               

                </div>
      </nav>

    )
  }
}

const mapStateToProps = (state) => {

  return {
    cart: state.cart.cart,
    cartUpdated: () => { return true }
  }
};

export default connect(mapStateToProps)(Navigation);