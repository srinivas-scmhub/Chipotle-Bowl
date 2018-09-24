import React from 'react';
import classes from './BowlIngredients.css'

const bowlIngredients = (props)=> {

    let ingredient = null;
    if(props.type=== 'whiterice') {
        ingredient = <div className = {classes.Whiterice} >whiterice </div>;
    }
    else if(props.type==='brownrice') {
        ingredient = <div className = {classes.Brownrice}> brownrice </div>;
    }
    else if(props.type==='beans') {
        ingredient = <div className = {classes.Beans}> beans </div>;
    }
    else{
        ingredient = null;
    }

    // switch(props.type)
    // {
        // case('whiterice') : 
        // ingredient = <div className = {classes.Whiterice} > whiterice </div>;
        // break;
        // case('brownrice') : 
        // ingredient = <div className = {classes.Brownrice}> brownrice </div>;
        // break;
        // default: 
        // ingredient = null;
// 
    // }

    return ingredient;

};

export default bowlIngredients;