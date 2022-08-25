import React from 'react';
import './Home.css';
import blue_img from './ama_blue.jpg';
import Product from './Product';
import m4_img from './m4.jpg';
import dji_img from './dji.jpg';
import rog_img from './rog.jpg';
import bike_img from './bike.jpg';



function Home(){
    return(
        <div className = "home">
            
            <div className = "home__container">
                
                <img src = {blue_img} alt = "amazon background img"
                className = "home__image" 
                />
                <div className = "home__row">
                    <Product 
                    id="12321341"
                    tittle="BMW M4 is a high-performance 
                    version of the BMW 4 Series coupes and 
                    convertibles developed by BMW's motorsport"
                    price = {69999.99}
                    image = {m4_img}
                    rating={5}
                    />
                
                <Product 
                id="12321341"
                tittle="BMW M4 is a high-performance 
                    version of the BMW 4 Series coupes and 
                    convertibles developed by BMW's motorsport"
                    price = {69999.99}
                    image = {m4_img}
                    rating={5}
                    />
                    
                    
                </div>

                <div className = "home__row">
                <Product 
                    id="12321341"
                    tittle="DJI drone"
                    price = {1023.32}
                    image = {dji_img}
                    rating={4}
                    />
                    <Product 
                    id="12321341"
                    tittle="Asus Monitor"
                    price = {688.99}
                    image = {rog_img}
                    rating={5}
                    />
                    <Product 
                    id="12321341"
                    tittle="Specialized Roadbike"
                    price = {4324.32}
                    image = {bike_img}
                    rating={3}
                    />
                </div>

                <div className = "home__row">
                <Product 
                    id="12321341"
                    tittle="BMW M4 is a high-performance 
                    version of the BMW 4 Series coupes and 
                    convertibles developed by BMW's motorsport"
                    price = {69999.99}
                    image = {m4_img}
                    rating={5}
                    />
                   
                </div>

            </div>
        </div>

    );

}

export default Home