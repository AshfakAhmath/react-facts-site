import img from "../assets/pngwing.com.png";

function Navbar(){
    return(
        <header>
            <nav>
                <img src={img} alt="React image" className="nav-img" />
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}

export default Navbar