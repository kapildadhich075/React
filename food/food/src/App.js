import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

import {useState} from 'react';
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartisShown] = useState(false);

  const ShowcartHandler = () => {
    setCartisShown(true);
  };

  const hideCartHandler = () => {
    setCartisShown(false);
  };
  return (
    <CartProvider>
    {cartIsShown && <Cart onClose = {hideCartHandler}/>}
    <Header onShowCart={ShowcartHandler}/>
    <Meals />
    </CartProvider>
  );
}

export default App;
