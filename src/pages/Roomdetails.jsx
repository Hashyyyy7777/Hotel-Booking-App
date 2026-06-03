import { useParams } from "react-router-dom";
function Roomdetails(){
    const {id}= useParams();
     return(
        <div className="grid2">
        <div className="roomdetails">
            <h1 className="details"> Room Details</h1>
            <p>
                <strong className="p3">Room ID:{id}</strong>

            </p>
           
            <p className="p2"> Let this room be your little world of peace, where time slows and smiles grow</p>

        </div>
        </div>
     );
}
export default Roomdetails;