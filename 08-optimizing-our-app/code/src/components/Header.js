import Logo from "../assets/Logo.png";
const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo-name">
          <div className="brand-logo">
            <img src={Logo} alt="logo" />
          </div>
          <p>
            <span className="location-city">Edappally</span>
            <span className="location">Kochi, Kerala, India</span>
          </p>
        </div>
        <ul className="flex-between-center">
          <li>Offers</li>
          <li>Help</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
