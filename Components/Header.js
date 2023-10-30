import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Header =()=>{

    const cart = useSelector((store)=>store.cart.userCart);
    const user = useSelector((store)=>store.loggedInUser.user);
    c=0;
    return (
        <div className="header ">
              <h3>EthinicWear</h3>
                <ul className="d">                
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/cart'}>Cart: {cart.length}</Link></li>
                    <li>{user.loggedIn ? user.name : <Link to={'/login'}>Login</Link>}</li>
                    {/* <li><Link to={'/registration'}>Registration</Link></li> */}
                </ul>
        </div>
    )
}

export default Header;