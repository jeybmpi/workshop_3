import React, { Component } from 'react';
import './style.scss';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';
import Main2 from './main2/Main2.jsx';



class App extends Component {

    componentDidMount(){
        console.log('Estoy iniciando');
    }

    render(){
        return (
            <div>
                <Header />
                <main className='main'>
                    <div>

                    </div>
                    <div>
                    <Main2 />
                    </div>
                    
                </main>
                <Footer />

            </div>
        )
    }
}

export default App;