import React from 'react'
import Browsebytype from './BROWSEBYCOMPO/Browsebytype'
import Gridimage from './grid/Gridimage'
import "./Browseby.css"
import Homeguest from './Homeguest/Homeguest'
const Browseby = () => {
  return (
    <div className='coloumn'>
      <Browsebytype />
      <Gridimage />
      <Homeguest />
    </div>
  )
}

export default Browseby
