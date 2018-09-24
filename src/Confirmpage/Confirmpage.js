import React from 'react';
import classes from './Confirmpage.css';
import Auxiliary from '../hoc/Auxiliary';

const confirmpage = (props) => {
     // const ingredient = ingredients.map(ing => {
     //      return ing;
     // });
     let ing=null;
     
     if(props.clicked){
          for(let control in props.controls){
               ing = control.type;
          
     return (
          <Auxiliary>
          <div className={classes.Confirm}> 
         <div className={classes.Label}>
         <p> {ing}</p>
       </div>
    </div>
    </Auxiliary>
     );
     }
     }
    return null;
}

export default confirmpage;