
import React, { Component } from 'react';
import Auxiliary from '../hoc/Auxiliary';
import Footer from '../Components/Footer/Footer';
import Toolbar from '../Components/Toolbar/Toolbar';


class Chipotle extends Component{

    render()  {
        return (
            <Auxiliary>
            <Toolbar />
            <main>
            {this.props.children}
            </main>
            <Footer />
            </Auxiliary>
        );

    };
}

export default Chipotle;