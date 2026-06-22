import img from "./assets/pngwing.com.png";

function Header() {
  return (
    <header>
      <img src={img} alt="React" width="80px" />
      <nav>
        <ul className="nav-list">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
