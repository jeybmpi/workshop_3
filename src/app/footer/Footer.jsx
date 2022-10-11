import React, { Component } from 'react';
import '../footer/style.scss';
import logo from '../../../public/images/logo.svg';
import facebook from '../../../public/images/icon-facebook.svg';
import instagram from '../../../public/images/icon-instagram.svg';
import twitter from '../../../public/images/icon-twitter.svg';
import pinterest from '../../../public/images/icon-pinterest.svg';


class Footer extends Component {

    render(){
        return (
            
            <footer className='footer'>

                <div className='footer__superior'>

                <img src={logo} alt="" className='footer__superior__logo'/>

                <div className='footer__superior__icons'>
                    <div className='footer__superior__icons__contenedor'>
                    <img src={facebook} alt="" className='footer__superior__icons__icon'/>
                    </div>

                    <div className='footer__superior__icons__contenedor'>
                    <img src={twitter} alt="" className='footer__superior__icons__icon'/>
                    </div>

                    <div className='footer__superior__icons__contenedor'>
                    <img src={pinterest} alt="" className='footer__superior__icons__icon'/>
                    </div>

                    <div className='footer__superior__icons__contenedor'>
                    <img src={instagram} alt="" className='footer__superior__icons__icon'/>
                    </div>
                </div>

                </div>
                <section className='footer__abajo'>
                <div className='header__navar__derecha'>
                <div className='header__navar__derecha__letras'>About</div>
                <div className='header__navar__derecha__letras'>careers</div>
                <div className='header__navar__derecha__letras'>Events</div>
                <div className='header__navar__derecha__letras'>Products</div>
                <div className='header__navar__derecha__letras'>Support</div>
                </div>
                </section>

                <section className='footer__letras'>
                    <div>2021 Loopstudios. All rights reserved.</div>
                </section>
                
            </footer>
           
        )
    }
}

export default Footer;