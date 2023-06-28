import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png";
const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo-name">
          <Link to="/">
            <div className="brand-logo">
              <img src={Logo} alt="logo" />
            </div>
          </Link>

          <p>
            <span className="location-city">Edappally</span>
            <span className="location">Kochi, Kerala, India</span>
          </p>
        </div>
        <ul className="flex-between-center">
          <Link to="/offers">
            <li>Offers</li>
          </Link>
          <Link to="/help">
            <li>Help</li>
          </Link>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
