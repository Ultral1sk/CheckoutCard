import { INCREASE, DECREASE, REMOVE, CLEAR, GET_TOTALS } from './phoneCardType';


import cartItems    from '../../../cart-items'


const initialState = {
    count : 10,
    total : 105,
    cart : cartItems
    
}


const cardReducer = (state = initialState, action) => {

    /* INCERASE ACTION  */
    // if the cart id is the same with the id comming from the action.payload increase the amount of THAT card + 1
    if (action.type === INCREASE) {
        let tempCart = state.cart.map(cartItem => {
            if( cartItem.id === action.payload.id ) {
                // here we create a new array with the same values but only the card with the same id
                // will have the amount updated we will overwrite everything
                cartItem = {...cartItem, amount : cartItem.amount + 1}
            }

            return cartItem;
        })
        return {...state,  cart: tempCart }
    }

    /* DECREASE ACTION  */
    if (action.type === DECREASE) {
        let tempCart = [];


        // if the cart amount is equal to one, filter the cart and remove it because the amount will be  0 
        // and we don't want need to store it inside checkout when the amount is 0
        if( action.payload.amount === 1 ) {
            tempCart = state.cart.filter(cartItem => cartItem.id !== action.payload.id)

        } else {
            // if the amount is bigger then 1
            // loop through the cartItem and check if the id will match the payload id 
            // take -1 from the amount of that card with the id
            tempCart = state.cart.map(cartItem => {
                if(cartItem.id === action.payload.id) {
                    cartItem = {...cartItem, amount : cartItem.amount - 1}
                }
                console.log(`comming from decrease`,cartItem)
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
