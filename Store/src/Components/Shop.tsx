import React, { Component } from 'react';
import '../App.css';
import ProductsList from './ProductsList';
import ProductView from './ProductView.js';

interface IShop{
    type:string;
}
class Shop extends Component<IShop> {
    render() {        
        return (
            <div >
                {/* <ProductsList type={this.props.type} /> */}
                {console.log(this.props.type)}
                <ProductView type={this.props.type}/>
            </div>
        );
    }
}

export default Shop;
