import React from 'react';

const Product = (props) => {
    const {id, name } = props.product;
    const {addToCart} = props;
    // console.log(addToCart)
    return (
        <div style={{border:'1px solid tomato', marginBottom:'10px'}}>
            <h5>{name}</h5>
            <button onClick={()=>addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Product;