import { createStore } from 'redux'
import phoneReducer from './phoneCard/phoneCardReducer'

const store = createStore(phoneReducer)




export default store