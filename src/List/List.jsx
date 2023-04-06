import React from 'react'
import "./List.css"
import Navbar from '../Home/components/Navbar/Navbar'
import Header from '../Home/components/Header/Header'
import { mycontext } from '../App'
import { useContext } from 'react'
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; 
import {format } from 'date-fns';
import { DateRange } from 'react-date-range'
import Individualresult from './Individualresult'
import Footer from '../Home/components/Footer/Footer'
import Email from '../Home/components/Email/Email'

const List = () => {
  const { rangedate, setrangedate, guestdetails, setguestdetails, destination, setdestination } = useContext(mycontext);

  const [opendate, setopendate] = useState(false)
  return (
    <>
      <Navbar />
      <Header type="List" />
      <div className='searchresult'>
        <div className='searchresultcontainer'>
          <div className='searchtab'>
          <h2>Search</h2>
            <div className='destination col'>
            <span className='label'>Destination</span>
              <input type="text" id='listsearchinput' onChange={(e) => { setdestination(e.target.value) }} value={destination}  />
            </div>
            <div className='calenderdate col'>
              <span className='label'>check in date</span>
              <span onClick={() => { setopendate(opendate => !opendate) }} className='backwhite'>{`${format(rangedate[0].startDate, 'MM-dd-yyyy')} to 
                    ${format(rangedate[0].endDate, 'MM-dd-yyyy')}`}</span>
              {opendate && <DateRange className='datelist'
                editableDateInputs={true}
                onChange={item => setrangedate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={rangedate}
              />}
            </div>
            <div className='guestoptions'>
            <span className='label'>Options</span>
              <div className='optioncontainer'>
                <div className='optionitem'>
                  <span className='smlabel'>Min Price<span className='smalltext'>(per night)</span></span>
                  <input type="text"/>
                </div>
                <div className='optionitem'>
                  <span className='smlabel' >Max Price<span className='smalltext'>(per night)</span></span>
                  <input type="text"/>
                </div>
                <div className='optionitem'>
                  <span  className='smlabel'>Adult</span>
                  <input type="number" min={1} value={guestdetails.Adult} onChange={(e) => { setguestdetails({...guestdetails,Adult:e.target.value})}}/>
                </div>
                <div className='optionitem'>
                  <span  className='smlabel'>Children</span>
                  <input type="number" min={0} value={guestdetails.children} onChange={(e) => { setguestdetails({...guestdetails,children:e.target.value})}}/>
                </div>
                <div className='optionitem'>
                  <span  className='smlabel'>Room</span>
                  <input type="number" min={1} value={guestdetails.room} onChange={(e) => { setguestdetails({...guestdetails,room:e.target.value})}}/>
                </div>
              </div>
            </div>
            <button id='listbutton'>Search</button>
          </div>
          <div className='resulttab'>
            <Individualresult />
            <Individualresult />
            <Individualresult />
            <Individualresult />
            <Individualresult />
            <Individualresult />
            <Individualresult />
            <Individualresult />
            <Individualresult />

          </div>
        </div>
      </div>
      <Email />
      <Footer />


    </>

  )
}

export default List
