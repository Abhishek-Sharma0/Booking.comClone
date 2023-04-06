import React from 'react'
import "./Homeguest.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'
import Carousel from "react-elastic-carousel";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
const Homeguest = () => {
  return (
    <div className='main'>
        <div className='main-container'>
    <h2>Homes guests love</h2>
    <div className='typeflex'>
        
        <div className='type-f-container'>
        <Carousel breakPoints={breakPoints}>
            <div className='item'>
                <img className='myimage' src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1' />
                <span>Aparthotel Stare</span>
                <span>starting from <span>$ 112</span></span>
                <span className='rating'>
                    <span className="rateno">8.7</span>
                    <span className='ratinginfo'>Excellent <span className='ratingreview'>2,037 review</span></span>
                </span>
            </div>
            <div className='item'>
                <img className='myimage' src='https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1' />
                <span>7seasons Apartment</span>
                <span>starting from <span>$ 122</span></span>
                <span className='rating'>
                    <span className="rateno">8.7</span>
                    <span className='ratinginfo'>Excellent <span className='ratingreview'>2,037 review</span></span>
                </span>
            </div>
            <div className='item'>
                <img className='myimage'  src='https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1' />
                <span>Oriental Apartment</span>
                <span>starting from <span>$ 129</span></span>
                <span className='rating'>
                    <span className="rateno">8.7</span>
                    <span className='ratinginfo'>Excellent <span className='ratingreview'>2,037 review</span></span>
                </span>
                
            </div>
            <div className='item'>
                <img className='myimage' src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=' />
                <span>New Apartments</span>
                <span>starting from <span>$ 129</span></span>
                <span className='rating'>
                    <span className="rateno">8.7</span>
                    <span className='ratinginfo'>Excellent <span className='ratingreview'>2,037 review</span></span>
                </span>
            </div>
            <div className='item'>
                <img className='myimage' src='https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1' />
                <span>Aparthotel Stare</span>
                <span>starting from <span>$ 112</span></span>
                <span className='rating'>
                    <span className="rateno">8.7</span>
                    <span className='ratinginfo'>Excellent <span className='ratingreview'>2,037 review</span></span>
                </span>
            </div>
            </Carousel>
            
        </div>
      
    </div>
    </div>
    </div>
  )
}

export default Homeguest
