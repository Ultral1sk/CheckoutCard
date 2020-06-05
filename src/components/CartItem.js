import React from "react";
import { connect } from 'react-redux'
import { phoneCardRemove } from './redux/phoneCard/phoneActionCreator'
import { phoneCardIncrese } from './redux/phoneCard/phoneActionCreator'
import { phoneCardDecrese } from './redux/phoneCard/phoneActionCreator' 


const CartItem = ({ img, title, price, amount, phoneCardRemove, phoneCardIncrese, phoneCardDecrese }) => {
  return (
    <div className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={phoneCardRemove}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={phoneCardIncrese}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
     
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
          Increase
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn"  onClick={phoneCardDecrese}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};



const mapDispatchToProps = (dispatch, ownProps ) => {

  const {  amount } = ownProps

  return { 
    phoneCardIncrese :  () => dispatch(phoneCardIncrese(amount)),
    // phoneCardRemove  :  () => dispatch(phoneCardRemove(id)),
    // phoneCardDecrese :  () => dispatch(phoneCardDecrese(id,amount)),
  
  
  }
  
}

export default connect(null,mapDispatchToProps )(CartItem);
