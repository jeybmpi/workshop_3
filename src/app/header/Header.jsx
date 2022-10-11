import React, { Component } from 'react';
import Test from '../header/Test.jsx';
import logo from '../../../public/images/logo.svg';
import fondo from '../../../public/images/image-hero.jpg';
import fondoMobile from '../../../public/images/image-heromobile.jpg';
import burguer from '../../../public/images/icon-hamburger.svg'
import '../header/style.scss';


class Header extends Component {

    listNav=["About", "Careers", "Events", "Products", "Support"]
    
    submit(e){
        e.preventDefault();
    }

    render(){
        return (
            
            <header className='header'>
                <img src={fondo} alt="" className='header__fondo'/>
                <img src={fondoMobile} alt="" className='header__fondomobile'/>
                <nav className='header__navar'>
                <img src={logo} alt="" className='header__navar__izquierda'/>
                <div className='header__navar__derecha'>
                <nav  onSubmit={this.submit} className='header__navar__derecha__letras'>
                {
                    this.listNav.map((element, index) => (
                        <Test key={index} label={element}/>
                    ))
                }
                </nav> 
                <img src={burguer} alt=""/>           
                </div>
                </nav>
                <section className='header__navar__abajo'>
                    <div className='header__navar__abajo__contenido'>IMMERSIVE <br /> ESPERIENCES <br /> THAT DELIVER</div>
                </section>
            </header>
           
        )
    }
}

export default Header;