import React from 'react';
import Product from '../Product/Product';
import { addToCart } from '../../redux/action/CartAction';
import { connect } from 'react-redux';

const Shop = (props) => {
    console.log(props)
    const { addToCart } = props;
    // console.log(addToCart)
    const products = [
        {name: 'Lenovo Laptop', id:1},
        {name: 'Asus Laptop', id:2},
        {name: 'Hp Laptop', id:3},
        {name: 'Sumgsang Laptop', id:4},
        {name: 'Dell Laptop', id:5},
    ]
    return (
        <div>
            <h1>This is Shop</h1>
            {
                products.map(pd => <Product key={pd.id} product={pd} addToCart={addToCart}></Product>)
            }
        </div>
    );
};


const mapStateToProps = state => ({
    cart: state.cart,
    products: state.products 
})

const mapDispatchToProps ={
    addToCart: addToCart
}

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);

// connect(mapStateToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);