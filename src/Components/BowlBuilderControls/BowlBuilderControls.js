import React from 'react';
import BowlBuildControl from '../BowlBuildControl/BowlBuildControl';
import classes from './BowlBuilderControls.css';
import Auxiliary from '../../hoc/Auxiliary';
import Confirmpage from '../../Confirmpage/Confirmpage';

const controls = [
    {label: 'Whiterice', type:'whiterice'},
    {label: 'Brownrice', type:'brownrice'},
    {label: 'Beans', type:'beans'},
    {label: 'BlackBeans', type:'blackBeans'},
    {label: 'Chicken', type:'chicken'},
    {label: 'Steak', type:'steak'},
    {label: 'Fish', type:'fish'},
    {label: 'Lettuce', type:'lettuce'},
    {label: 'Gucamole', type:'gucamole'},
    {label: 'Freshtomatosalsa', type:'freshtomatosalsa'},
    {label: 'Sourcream', type:'sourcream'}
];



const bowlBuilderControls = (props) => (
    <Auxiliary>
    {/* <Confirmpage displayed= {props.display} types = {this.controls}/ >*/}
    <div className={classes.Controls}>
    <div className={classes.Tprice}>Total Price: {props.tprice.toFixed(2)} </div>
    {controls.map((ctrl,i) => {
    return ( 
        <Auxiliary>
        <BowlBuildControl 
    key = {ctrl.type+i}
    addIng = {() => {props.addingredients(ctrl.type)}}
    removeIng = {() => {props.removeingredients(ctrl.type)}}
    disabled={props.disable[ctrl.type]}
    label={ctrl.label}/>
    </Auxiliary>
    );

        
})} 


<Confirmpage clicked={props.display} controls={controls} />
    <div>
    <button className={classes.Button}>Cancel</button>
   <button className={classes.Button} onClick={props.click}>OrderNow</button>
    </div>

    </div>

    </Auxiliary>
);

export default bowlBuilderControls;
