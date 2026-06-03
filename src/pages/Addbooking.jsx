import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Addbooking({booking,setBooking}){
    const [name,setName]=useState("");
    const [room,setRoom]=useState("");

    const navigate = useNavigate();
    const handlesubmit =(e) =>{
        e.preventDefault();

        const newbooking={
            id: Date.now(),
            name,
            room,
        };

        setBooking ([...booking,newbooking]);
        navigate("/history");
    };
    return(
        <div className="addbooking">
            <form  onSubmit={handlesubmit} > 
                <h1 className="h6">Book Here</h1>
                <input type="text" 
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}/>

                <input type="text"
                placeholder="room"
                value={room} 
                onChange={(e) => setRoom(e.target.value)}/>
                <button type="submit" className="button">Book Now</button>
            </form>
            

        </div>
    );

}
export default Addbooking;