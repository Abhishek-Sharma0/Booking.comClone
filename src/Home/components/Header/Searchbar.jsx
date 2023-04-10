import React, { useContext } from 'react'
import "./Searchbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faClose } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faPerson,faSquarePlus,faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 
import { DateRangePicker } from 'react-date-range';
import { compareAsc, format } from 'date-fns'
import { useState } from 'react'
import { DateRange } from 'react-date-range'
import { mycontext } from '../../../App'
import { Link } from 'react-router-dom'

const Searchbar = () => {
    const {rangedate, setrangedate,guestdetails,setguestdetails,destination,setdestination} =useContext(mycontext);
    
      const [opendate,setopendate]=useState(false)
      const [openoptions,setopenoptions]=useState(false)
      function handleclick(type,operation){
        setguestdetails((prev)=>{return{...prev,[type]: operation==="i"? guestdetails[type]+1 : guestdetails[type]-1}})
      }
    return (
        <div className='searchbar'>
            <div className='searchbarcontainer'>
                <div className='searchplace'>
                    <FontAwesomeIcon icon={faBed} />
                    <input type="text" placeholder='Where are you going' id='searchinput' onChange={(e)=>{setdestination(e.target.value)}} value={destination} />
                </div>
                <div className='searchplace'>
                    <FontAwesomeIcon icon={faClose} />
                    <span onClick={()=>{setopendate(opendate=> !opendate)}}>{`${format(rangedate[0].startDate,'MM-dd-yyyy')} to 
                    ${format(rangedate[0].endDate,'MM-dd-yyyy')}`}</span>

                    {/* //here we are using npm package date range picker */}

                   {opendate&&<DateRange className='daterangeset'
  editableDateInputs={true}
  onChange={item => setrangedate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={rangedate}
/>}
                </div>
                <div className='searchplace'>
                    <FontAwesomeIcon icon={faPerson} />
                    <span onClick={()=>{setopenoptions(openoptions=>!openoptions)}}>{`${guestdetails.Adult} Adult ${guestdetails.children} children ${guestdetails.room} room`}</span>
                   {openoptions && <div className='options'>
                        <div className='optionitems'>
                            <span>Adult</span>
                            <div className='itemno'>
                            <button onClick={()=>{handleclick("Adult","i")}}>+</button>
                            <span>{guestdetails.Adult}</span>
                            <button
                            disabled={guestdetails.Adult<=1} onClick={()=>{handleclick("Adult","d")}}>-</button>   
                            </div>
                        </div>
                        <div className='optionitems'>
                            <span>children</span>
                            <div className='itemno'>
                            <button
                            onClick={()=>{handleclick("children","i")}}>+
                                </button>
                            <span>{guestdetails.children}</span>
                            <button
                             disabled={guestdetails.children<=0}onClick={()=>{handleclick("children","d")}}>-</button>   
                            </div>
                        </div>
                        <div className='optionitems'>
                            <span>rooms</span>
                            <div className='itemno'>
                            <button onClick={()=>{handleclick("room","i")}}>+</button>
                            <span>{guestdetails.room}</span>
                            <button 
                             disabled={guestdetails.room<=1} onClick={()=>{handleclick("room","d")}}>-</button>   
                            </div>
                        </div>
                    </div>}
                    
                </div>
                <Link to={"/List"}><button className='submit' onClick={(e)=>{
                    if(destination===""){
                        e.preventDefault();
                    alert("enter the destination feild");
                    return;
                }}}>Submit</button></Link>
                
            </div>

        </div>
    )
}

export default Searchbar
