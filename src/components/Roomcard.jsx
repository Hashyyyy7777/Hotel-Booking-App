import { Link } from "react-router-dom";
function Roomcard({room}){
return(
    <div className="roomcard">
        <h1>{room.type}</h1>
        <p className="roomno"> Room No:{room.roomNo}</p>
        <p className="price">Price:${room.price}</p>
        <Link className="detail"to={`/room/${room.id}`}>Details</Link>
        <hr />
    
    </div>
    
);

}
export default Roomcard;