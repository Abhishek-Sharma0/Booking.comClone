import React, { useState } from 'react'
import "./SingleHotel.css"
import Navbar from '../Home/components/Navbar/Navbar'
import Header from '../Home/components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Home/components/Footer/Footer'
import Email from '../Home/components/Email/Email'
import { imagearray } from './array'

const SingleHotel = () => {
  const[slideno,setslideno]=useState(0);
  const[openslider,setopenslider]=useState(false);
  function handleclick(i){
    setslideno(i);
    setopenslider(true);
    
  }
  function changeslideno(side){
      if(side==="r"){
          slideno===imagearray.length-1? setslideno(0):setslideno(slideno=>slideno+1);
      }
      else{
        slideno===0? setslideno(imagearray.length-1):setslideno(slideno=>slideno-1);
      }
  }
  return (
    <div>
      <Navbar />
      <Header type="List" />
      <div className='singl-main'>
      {openslider && <div className='slider'>
          <FontAwesomeIcon icon={faCircleXmark} className="exit" onClick={()=>{setopenslider(false)}}/>
          <FontAwesomeIcon icon={faCircleArrowLeft} className="left-slide" onClick={()=>changeslideno("l")} />
          <div className='sliderwrapper'>
            <img className='slider-img' src={imagearray[slideno].src} />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className="right-slide" onClick={()=>changeslideno("r")} />
          </div>}
        {!openslider && <div className='single-main-container'>
          <div className='adress'>
            <span className='ll-text'>Tower Street Apartment</span>
            <div className='icondiv'>
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              <span className='sm-text'>39, Race Course Road Opp. 56 Shops, 452001 Indore, India</span>
            </div>
            <span className='mm-text blue-mm'>Excellent location -500m from the center</span>
            <span className='mm-text green-mm'>Book a stay over $114 at this property and get a free airport taxi</span>
            <button className='single-btn'>Reserve a book now</button>
          </div>
          {<div className='singlegrid'>
            {imagearray.map((element,i)=>{
              return <img src={element.src} id={i} alt="image" onClick={()=>handleclick(i)}/>
            })}
          </div>}
          <div className='description'>
            <div className='description-content'>
              <h2>Stay in the heart of Indore</h2>
              <p>Featuring 3-star accommodations, Click hotel Sapphire Star is located in Indore, 2.4 km from Indore Junction Station and 3.7 km from Rajwada Palace. This 3-star hotel offers room service and a concierge service. The property has a 24-hour front desk, airport transportation, a shared lounge and free WiFi throughout the property.All rooms come with air conditioning, a flat-screen TV with cable channels, a minibar, a electric tea pot, a shower, free toiletries and a desk. The rooms have a private bathroom, a hairdryer and bed linen.</p>
            </div>
            <div className='box'>
              <h3>Perfect for a 9-night stay</h3>
              <p>Locates at the heart of Indore this property has excellent location score of 8.5</p>
              <span className='ll-text'>$295<span className='sm-fw'>(9 nights)</span></span>
              <button className='single-btl'>Reserve or book now</button>
            </div>
          </div>
        </div>}
      </div>
      <Email />
      <Footer />
    </div>
  )
}

export default SingleHotel
