import { INCREASE } from './phoneCardType'
import { CLEAR }    from './phoneCardType'

export const phoneCardIncrease = () => {
    return {
        type : INCREASE,
     
    }

}

export const phoneCardClear = () => {
    return {
        type : CLEAR,
      
    }

}