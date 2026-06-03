function Bookinghistory({booking,setBooking}){

   const deleteBooking=(id) => {setBooking(booking.filter((booking) => booking.id !==id)
   );
   } ;

   return(
    <div className="history1">    
        <h1 className="head9">Booking History</h1>
        <div className="history">

        {booking.length ===0?(

            <p className="nobooking">No booking found</p>

        ):(

            booking.map((bookings)=>(
             <div key={bookings.id}> 
             <h3 className="h3">{bookings.name}</h3>
             <p className="room4"> Room: {bookings.room}</p>
             <button className="button5" onClick={()=>

                deleteBooking(bookings.id)
             }>
                delete
             </button>
<hr />

             </div>
                
            ))
        )
        }
        </div>

    </div>

   );

}
export default Bookinghistory;