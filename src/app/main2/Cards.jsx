import React, { Component } from 'react';
import '../main2/style.scss';



class Cards extends Component {

    render(){
        return (
            <div>
                <div>
                <img src={this.props.div} alt="" className='images' />
                </div>
                
                <p className='p'>{this.props.p}</p>
            </div>    
            
        )
    }
}

export default Cards;