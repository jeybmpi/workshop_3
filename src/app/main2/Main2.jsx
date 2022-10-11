import React, { Component } from 'react';
import Cards from './Cards.jsx';
import '../main2/style.scss';
import earth from '../../../public/images/image-deep-earth.jpg';
import night from '../../../public/images/image-night-arcade.jpg';
import soccer from '../../../public/images/image-soccer-team.jpg';
import grid from '../../../public/images/image-grid.jpg';
import above from '../../../public/images/image-from-above.jpg';
import pocket from '../../../public/images/image-pocket-borealis.jpg';
import curisity from '../../../public/images/image-curiosity.jpg';
import fisheye from '../../../public/images/image-fisheye.jpg';
//____________
import earth1 from '../../../public/images/image-deep-earth1.jpg';
import night1 from '../../../public/images/image-night-arcade1.jpg';
import soccer1 from '../../../public/images/image-soccer-team1.jpg';
import grid1 from '../../../public/images/image-grid1.jpg';
import above1 from '../../../public/images/image-from-above1.jpg';
import pocket1 from '../../../public/images/image-pocket-borealis1.jpg';
import curisity1 from '../../../public/images/image-curiosity1.jpg';
import fisheye1 from '../../../public/images/image-fisheye1.jpg';
//__
import imgMain from '../../../public/images/image-interactive.jpg'

class Main2 extends Component {
    imagenes = [earth, night, soccer, grid, above, pocket, curisity, fisheye];
    imagenes1 = [earth1, night1, soccer1, grid1, above1, pocket1, curisity1, fisheye1];
    letras = ["DEEP EARTH","NIGHT ARCADE","SOCCER TEAM VR","THE GRID","FROM UP ABOVE VR","POCKET BOREALS","THE CURIOSITY","MAKE IT FISHEYE"]
    render(){

        return (
            
            <div className='main__inferior2'>
                
            <div className='main__inferior2__div'>
            <img src={imgMain} alt="" className='main__inferior2__img' >
            </img>
            <section className='main__inferior2__section'>
                <h1 >THE LEADER IN INTERECTIVE VR</h1>
                <span>Founded en 2011, Loopstudios has been producting world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to the their brand.</span>
            </section>
            </div>
            <div className='main__inferior2__superior'>
                <div className='main__inferior2__superior__letra'>OUR CREATIONS</div>
                <div className='main__inferior2__superior__div'>See All</div>
            </div>
            <div className='main__inferior2__inferior'>
                <div className='imagesC'>
                {
                this.imagenes.map((element,index)=>{
                    return (
                        <Cards key={index} div={element}/>
                    )               
                })
                
                }      
                </div>
                <div className='letrasC'>
                {
                this.letras.map((element,index)=>{
                    return (
                        <Cards key={index} p={element}/>
                    )               
                })
                
                }  
                </div>
                <div className='imagesmobil'>
                {
                this.imagenes1.map((element,index)=>{
                    return (
                        <Cards key={index} div={element}/>
                    )               
                })
                
                } 
                </div>
            </div>
            </div>       
        )
    }
}

export default Main2;