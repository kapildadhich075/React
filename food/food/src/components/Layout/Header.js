import React from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meal.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
      <>
       <header className={classes.header}>
         <h1>MEALS</h1>
         <HeaderCartButton onClick = {props.onShowCart}/>
       </header>
       
       <div className={classes['main-image']}>
           <img src={mealsImage} alt='Food we want'/> 
       </div>
      </>
  )
}

export default Header;