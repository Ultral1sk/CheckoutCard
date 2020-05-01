import { INCREASE } from './phoneCardType';
import cartItems from '../../../cart-items'


const initialState = {
    count : 10,
    total : 105,
    cart : cartItems
}


const cardReducer = (state = initialState, action) => {

    switch(action.type) {
       
        

        default : return state
    }

}

export default cardReducer
