import { ADD_TO_CART, REMOVE_FROM_CART } from "../action/CartAction";




const initialState = {
    cart: [],
    products: [
        {name: 'Lenovo Laptop', id:1},
        {name: 'Asus Laptop', id:2},
        {name: 'Hp Laptop', id:3},
        {name: 'Sumgsang Laptop', id:4},
        {name: 'Dell Laptop', id:5},
    ],
}

export const cartReducers =(state = initialState , action) =>{
    switch(action.type){
        case ADD_TO_CART:
            return {
                cart: [...state.cart, action.id],
                products: state.products.map(product => product.id === action.id? {...product, quantity: product.quantity + 1}: product)
            };
        
        case REMOVE_FROM_CART:
            return{
                cart: state.cart.filter(item => item !== action.id)
            }

        default:
            return state;
    }   
}