import {Routes,Route} from "react-router-dom";
import Home from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Rooms from "./pages/Rooms";
import Roomdetails from "./pages/Roomdetails";
import Addbooking from "./pages/Addbooking";
import Bookinghistory from "./pages/Bookinghistory";
import { useState } from "react";
import "./App.css";
function App(){
const [booking,setBooking]=useState([]);
  return(
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/rooms" element={<Rooms/>}/>
    <Route  path="/room/:id" element={<Roomdetails/>}/>
    <Route path="/booking" element={<Addbooking booking={booking} setBooking={setBooking}/>}/>
    <Route path="/history" element={<Bookinghistory booking={booking} setBooking={setBooking}/>}/>
    </Routes>
    </>
  );
}
export default App;