import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Blog <img className="logo" src="https://i.imgur.com/yZ1Yzzz.png" alt="logo"/></h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "black",
                    backgroundColor: "#62DAFB",
                    borderRadius: "10vmin",
                }}>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;