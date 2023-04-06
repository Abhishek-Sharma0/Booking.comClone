import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./List/List";
import SingleHotel from "./SingleHotel/SingleHotel";
import Home from "./Home/Home";
import { useState } from 'react';
import { createContext } from 'react';
export const mycontext = createContext();
function App() {
  const [rangedate, setrangedate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [guestdetails, setguestdetails] = useState(
    {
      Adult: 1,
      children: 0,
      room: 1,
    })
  const[destination,setdestination]=useState("");
  return (
    <mycontext.Provider value={{ rangedate, setrangedate,guestdetails,setguestdetails,destination,setdestination }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/List" element={<List />} />
          <Route path="/SingleHotel/:id" element={<SingleHotel />} />
        </Routes>
      </BrowserRouter>
    </mycontext.Provider>
  );
}

export default App;
