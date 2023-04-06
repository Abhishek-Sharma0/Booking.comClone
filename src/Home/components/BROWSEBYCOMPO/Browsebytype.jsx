import React from 'react'
import "./Browsebytype.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong,faRightLong } from '@fortawesome/free-solid-svg-icons'
import { useRef,useState } from 'react'
import Carousel from "react-elastic-carousel";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  

const Browsebytype = () => {
    const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

    return (
        <div className='main'>
            <div className='main-container' ref={containerRef}>
                <h2>Browse by Property type</h2>
                <div className='typeflex'>

                    <div className='type-f-container'>
                    <Carousel breakPoints={breakPoints}>
                        <div className='item' id='1'>
                            <img src='https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=' />
                            <span>Reseorts</span>
                            <span>19,183 resorts</span>
                        </div>
                        <div className='item' id='2'>
                            <img src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=' />
                            <span>villas</span>
                            <span>19,283 villas</span>
                        </div>
                        <div className='item' id='3'>
                            <img src='https://r-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=' />
                            <span>Hotels</span>
                            <span>949,703 hotels</span>
                        </div>
                        <div className='item' id='4'>
                            <img src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o=' />
                            <span>Apartments</span>
                            <span>1,011961 apartments</span>
                        </div>
                        <div className='item' id='5'>
                            <img src='https://q-xx.bstatic.com/xdata/images/xphoto/300x240/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o=' />
                            <span>villas</span>
                            <span>19,283 villas</span>
                        </div>
                        </Carousel>

                    </div>

                </div>
                {/* <FontAwesomeIcon icon={faLeftLong} id="left" />
                <FontAwesomeIcon icon={faRightLong} id="right"/> */}
            </div>
        </div>
    )
    }

export default Browsebytype
