import img from "./assets/pngwing.com.png";

function Header() {
  return (
    <header className="header">
      <img className="nav-img" src={img} alt="React" />
      <nav>
        <ul className="nav-list">
            <li className="list">Pricing</li>
            <li className="list">About</li>
            <li className="list">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
