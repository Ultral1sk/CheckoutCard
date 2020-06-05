import { INCREASE } from './phoneCardType';
import { DECREASE } from './phoneCardType';
import { REMOVE }   from './phoneCardType';
import { CLEAR }    from './phoneCardType'
import cartItems    from '../../../cart-items'


const initialState = {
    count : 10,
    total : 105,
    cart : cartItems
    
}


const cardReducer = (state = initialState, action) => {

    if (action.type === INCREASE) {
        return {
            ...state,
            cart: console.log(state.cartItems)
        }
    }
    if (action.type === DECREASE) {
        return {
            ...state,
            
        }
    }

    if (action.type === REMOVE) {
        return {
            cart: state.cart.filter(item => action.payload !== item.id)
            // remove item when the index comming from data and the index comming from the array do not match
        }
    }


    if (action.type === CLEAR) {
        return {
            ...state,
            cart: state.cart = []
        }
    }

    return state
}

export default cardReducer
