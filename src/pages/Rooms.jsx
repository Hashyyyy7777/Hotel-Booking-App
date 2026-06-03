import Roomcard from "../components/Roomcard";
function Rooms(){
    const rooms=[
        {
            id: 1,
            roomNo: "100",
            type: "Delux",
            price: 2000,

        },
        {
            id:2,
            roomNo:"101",
            type:" Luxury",
            price:4000,
        },
        {
            id:3,
            roomNo:"101",
            type:"Friendly",
            price:1000,
        },
    ];

    return(
        <div className="rooms">
            <h1 className="h7">Available Rooms</h1>
            <div className="roomgrid">
            {rooms.map((room)=>(

                <Roomcard 
                key={room.id}
                room={room}/>

            ))
            }
            </div>

        </div>
    );
}
export default Rooms;