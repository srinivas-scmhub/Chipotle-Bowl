import React from 'react'
import classes from './Toolbar.css';
import Image from '../../assets/logo.png';

const toolbar = () => {
return (
<div className={classes.Toolbar}>
<ul>
<li><a className={classes.A} href='./'>Menu</a></li>
<a href={Image} ><li className={classes.Logo}><img className = {classes.Logo} src={Image} alt="chipotle" /></li></a>
<li className={classes.Right}><a className={classes.A} href='./'>Checkout</a></li>
<li className={classes.Right}><a className={classes.A} href='./'>OrderPage</a></li>
</ul>
</div>
);
}

export default toolbar;