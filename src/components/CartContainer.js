import React from "react";
import CartItem from "./CartItem";
import { connect } from 'react-redux'
import { CLEAR, GET_TOTALS } from './redux/phoneCard/phoneCardType'

const CartContainer = ({ cart = [], total,  dispatch }) => {

  React.useEffect(() => {
    dispatch({ type : GET_TOTALS})
  })

  // if we don't set a condtition like this the program will break because it runs before we map the cards
  // it will say can not map unidentifiet

  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>

      {/* cart items */}
      <article>
        {cart.map(item => {    
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      
      {/* cart footer */}
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button onClick={() => dispatch({ type : CLEAR})} className="btn clear-btn">clear cart</button>
      </footer>
    </section>
  );
};




const mapStateToProps = (state) => {

  const { cart, total } = state
  return { cart, total }
  }

export default connect(
  mapStateToProps,
  null)
  (CartContainer) ;
