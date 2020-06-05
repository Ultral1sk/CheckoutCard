import { INCREASE, DECREASE, REMOVE, CLEAR, GET_TOTALS } from './phoneCardType';


import cartItems    from '../../../cart-items'


const initialState = {
    count : 10,
    total : 105,
    cart : cartItems
    
}


const cardReducer = (state = initialState, action) => {

    /* INCERASE ACTION  */
    // if the cart id is the same with the id comming from the action.payload increase the amount of the card + 1
    if (action.type === INCREASE) {
        let tempCart = state.cart.map(cartItem => {
            console.log(`cartitem inside if`, cartItem)
            if( cartItem.id === action.payload.id ) {
                cartItem = {...cartItem, amount : cartItem.amount + 1}
            }

            return cartItem;

        })
        console.log(`increase value`,tempCart)
        return {...state,  cart: tempCart }
    }

    /* DECREASE ACTION  */
    if (action.type === DECREASE) {
        let tempCart = [];

        if( action.payload.amount === 1 ) {
            tempCart = state.cart.filter(cartItem => cartItem.id !== action.payload.id)

        } else {
            tempCart = state.cart.map(cartItem => {
                if(cartItem.id === action.payload.id) {
                    cartItem = {...cartItem, amount : cartItem.amount - 1}
                }
                
                return cartItem 
            });
        }
        return { ...state, cart : tempCart }
    }

    /* INCERASE REMOVE  */
    // remove item when the index comming from data and the index comming from the array do not match
    if (action.type === REMOVE) {
        return {
            ...state,
            cart: state.cart.filter(cartItem => cartItem.id !== action.payload.id)
        }
    }

    /* INCERASE CLEAR  */
    // On click make the cards array empty
    if (action.type === CLEAR) {
        return {
            ...state,
            cart: state.cart = []
        }
    }

    /* INCERASE GET_TOTALS  */
    // get the total and amount from the card 
    if( action.type === GET_TOTALS ) {
    
        let { total , amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount;
                
                cartTotal.total += itemTotal
                cartTotal.amount += amount
                
                return cartTotal
        }, 
        { 
            total : 0, 
            amount : 0
        }
      );
        total = parseFloat(total.toFixed(2));
        return { ...state, total, amount}
    }

    return state
}

export default cardReducer
