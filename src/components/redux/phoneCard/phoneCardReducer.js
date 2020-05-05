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

    switch(action.type) {
        case INCREASE : return {
         
            cart : console.log(cartItems.amount) 
        }
        case DECREASE : return {
         
          
            
           
        
        }
        case REMOVE : return {
            cart : state.cart.filter(item => action.payload !== item.id)
            // remove item when the index comming from data and the index comming from the array do not match
        }
        
        case CLEAR : return { 
            ...state,
            cart : state.cart = []
        }
        

        default : return state
    }

}

export default cardReducer
