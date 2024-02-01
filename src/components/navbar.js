// Components/NavBar.js
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
 <nav className="nav navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="nav-div container-fluid">
       <ul className="navbar-nav me-auto me-2 mb-10 mb-lg-0"> 
          <li className="nav-item px-3">
             <Link to="/"><strong>Home</strong></Link>
          </li>
          <li className="nav-item px-3">
             <Link to="/revenue"><strong>Revenue</strong></Link>
          </li>
          <li className="nav-item px-3">
             <Link className="" to="/expense"><strong>Expenses</strong></Link>
          </li>
       </ul>
    </div>
 </nav>
 );
};

export default Navbar;