import React,{Component} from 'react';
import Auxiliary from '../hoc/Auxiliary';
import BowlBuilderControls from '../Components/BowlBuilderControls/BowlBuilderControls';
import classes from './Bowl.css'
import BowlIngredients from './BowlIngredients/BowlIngredients';

const IngredientsPrice = {
whiterice: 0.5,
brownrice : 0.5,
beans: 0.3,
blackBeans : 0.3,
chicken: 1,
steak : 1,
fish : 1,
lettuce: 0.5,
gucamole: 0.5,
freshtomatosalsa: 0.2,
sourcream: 0.3
}
class Bowl extends Component {
 state = {
     ingredients : {
     whiterice: 0,
     brownrice: 0,
     beans: 0,
     blackBeans : 0,
     chicken: 0,
     steak : 0,
     fish : 0,
     lettuce: 0,
     gucamole: 0,
    freshtomatosalsa: 0,
    sourcream: 0
     },
     basePrice: 5,
     display: false
    }

        ingredientsAdd = (type) => {
            const count = this.state.ingredients[type];
            const newcount = count + 1;
            const newingredients = {
                ...this.state.ingredients
            }
            newingredients[type] = newcount;
            const newPrice = this.state.basePrice + IngredientsPrice[type];
            this.setState({ingredients: newingredients, basePrice: newPrice});
            
        }
        ingredientsremove = (type) => {
            const count = this.state.ingredients[type];
            let newcount = count - 1;
            if(newcount<=0){
               this.setState({disbale:true}) ;
            }
            const newingredients = {
                ...this.state.ingredients
            }
            newingredients[type] = newcount;
            const Newprice = this.state.basePrice - IngredientsPrice[type];
            this.setState({ingredients: newingredients, basePrice: Newprice});
        }

        displayConfirmPage = () => {
            this.setState({display: true})
            // for(let t of controls)
            // return <Confirmpage  type={t.type} display={this.state.display} />
        }
        
    render(){

        let styles ={
            boxSizing: 'border-box',
            fontWeight: 'bold',
            marginLeft: '250px',
            color : '#411562'
            
        };
       
        let ingredients = Object.keys(this.state.ingredients).map(ing=> {
            return [...Array( this.state.ingredients[ing] )].map( ( _, i ) => {
                return <BowlIngredients key={ing + i} type={ing} />;
            } );
        } ).reduce((arr, cl)=> {
            return arr.concat(cl);
        });
        if(ingredients.length===0){
            ingredients = <div style={styles}>Add Ingredients.....!</div>;
        }

        let disable = {
            ...this.state.ingredients
        }
        for(let type in disable)
        {
        disable[type]= disable[type]<=0; 
        }

        return (
    <Auxiliary>
    <br/><br/><br/>
    <div className={classes.Style}>
    {ingredients}
    </div>
    <p className={classes.Bowl}><br/>Bowl</p>
    <BowlBuilderControls 
    tprice={this.state.basePrice}
    ingredients={this.state.ingredients}
    addingredients= {this.ingredientsAdd}
    removeingredients= {this.ingredientsremove}
    disable={disable}
    click={this.displayConfirmPage}
    display={this.state.display}
    />
    </Auxiliary>
        );
    }
}

export default Bowl;