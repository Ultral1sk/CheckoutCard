import { INCREASE } from './phoneCardType'
import { CLEAR }    from './phoneCardType'
import { DECREASE } from './phoneCardType'
import { REMOVE }   from './phoneCardType'

export const phoneCardIncrese = () => {
    return { type : INCREASE}
}

export const phoneCardDecrese = () => {
    return { type : DECREASE}

}

export const phoneCardRemove = (id) => {
    return { type : REMOVE, payload : id }
}

export const phoneCardClear = () => {
    return { type : CLEAR, }
}