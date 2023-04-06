import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faPlane, faTaxi, faCar } from '@fortawesome/free-solid-svg-icons'
import Searchbar from './Searchbar';
import Carousel from "react-elastic-carousel";
const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 400, itemsToShow: 3 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 8 },
    { width: 1200, itemsToShow: 10 },
  ];
const Header = ({type}) => {
    return (
        <div className='Header'>
            <div className={type!=="List"?'Headercontainer' : 'Headercontainer marginless'}>
                <div className='iconbuttons'>
                <Carousel breakPoints={breakPoints} id="topcaurosel">
                    <div className='singleiconbutton active'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className='singleiconbutton'>
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className='singleiconbutton'>
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className='singleiconbutton'>
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className='singleiconbutton'>
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxi</span>
                    </div>
                    </Carousel>
                </div>
                {type!=="List"&&<>
                <div className='HEADER-CONTENT'>
                    <h1>Find your next stay</h1>
                    <p>Get rewarded for your travels -unlock instant saving of 10% or more with free Atbooking acount</p>
                    <button>Sign/Register</button>
                </div>
                <Searchbar /></>}
            </div>

        </div>
    )
}

export default Header
