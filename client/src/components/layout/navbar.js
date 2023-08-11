import React from "react";
import { Link} from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';

const Navbar=()=>{

    return(
        <nav className="nav-wrapper red darken-3">
          <div className="container">
            <Link to="/home" className="brand">StockTradingApp</Link>
            <ul className="right">
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>     
            </ul>
          </div>

        </nav>
    )
}

export default Navbar;