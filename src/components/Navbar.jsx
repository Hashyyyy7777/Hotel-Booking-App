import { Link } from "react-router-dom";
function Navbar(){
    return(
        <nav className="navbar">
            <Link className="home1" to="/">Home</Link> 
            <Link className="home1"  to="/rooms">Rooms</Link> 
            <Link className="home1" to="/booking">Book room</Link>
            <Link className="home1" to="/history">Booking history</Link>


        </nav>
    );
}
export default Navbar;