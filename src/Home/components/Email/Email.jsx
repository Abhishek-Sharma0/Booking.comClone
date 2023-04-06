import React from 'react'
import "./Email.css"
const Email = () => {
  return (
    <div className='email-section'>
        <div className='email-section-container'>
            <div className='email-content'>
            <h1 className='h-l'>Save time,save money!</h1>
            <span id='margin-t'>Sign up and we'll send the best deals to you</span>
            <form>
                <input type="email"/>
                <button type='submit' className='submit-light'>Subscribe</button>
            </form>
            </div>
        </div>
      
    </div>
  )
}

export default Email
