import {useContext} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartContext = useContext(CartContext);

    const numberofCartItems = cartContext.items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    },0);

  return (
      <button className={classes.button} onClick={props.onClick}>
          <span className={classes.icon}>
              <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>
              {numberofCartItems}
          </span>
      </button>
  )
}

export default HeaderCartButton;