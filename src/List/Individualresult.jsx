import React from 'react'
import "./Individualresult.css"
import { Link } from 'react-router-dom'
const Individualresult = () => {
    return (
        <div className='individalitemlist'>
            <div className='imagediv'>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/417176966.webp?k=99d60ff4726bd266c2000ee075f811d271d80dfaf391bd03980942845eabf85a&o=&s=1" alt='img' className='img-ind' />
            </div>

            <div className='bottom-content'>
            <div className='leftcontent'>
                <p className='heading'>Tower Street Apartment</p>
                <span className='smtext'>500m from center</span>
                <span className='btn-span lg-btn'>Free airpot taxi</span>
                <span className='bold'>Studio apartment with air contioning</span>
                <span className='smtext'>Entire studio . 1bathroom . 21&sup2 full bed</span>
                <span className='smtext green-dark'>Free cancellation</span>
                <span className='smtext green  sm-font'>You can cancel it later so,lock in this great price today!</span>
            </div>
            <div className='right-content'>
                <div className='head-left'>
                    <span style={{fontWeight: "700",}}>Excellent</span>
                    <span className='btn-span'>8.5</span>
                </div>
                <div className='head-bottom'>
                <span style={{fontSize: "24px",}}>$112</span>
                <span className='smtext'>Includes taxes and fees</span>
                <Link to={"/SingleHotel/12"}>
                <button className='btn-lg blue'>See availability</button>
                </Link>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Individualresult
