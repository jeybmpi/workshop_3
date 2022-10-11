import React, { Component } from 'react';


class Test extends Component{

    render(){
        return(
            <form>
                <label>{this.props.label}</label>
            </form>
        )
    }
    
}

export default Test;