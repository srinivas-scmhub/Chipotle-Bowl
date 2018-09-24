import React from 'react'
import classes from './BowlBuildControl.css'

const bowlBuildControl = (props) => {
    return(
        <div className={classes.Control}>
        <div className={classes.Label}>{props.label}</div>   
        <button onClick = {props.addIng} className={classes.Add}>Add</button>
        <button onClick = {props.removeIng} className={classes.Remove} disabled={props.disabled}>Remove</button>
        </div>
    );
}
export default bowlBuildControl;

