import { INCREASE } from './phoneCardType';
import { CLEAR }    from './phoneCardType'
import cartItems from '../../../cart-items'


const initialState = {
    count : 10,
    total : 105,
    cart : cartItems
}


const cardReducer = (state = initialState, action) => {

    switch(action.type) {
        case INCREASE : return {
            ...state,
            count : state.count + 1
        }
        case CLEAR : return { 
            ...state,
            cart : state.cart = []
        }
        

        default : return state
    }

}

export default cardReducer
