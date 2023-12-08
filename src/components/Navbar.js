import logo from '../assets/logo.png';
import { Link, animateScroll as scroll } from "react-scroll";

const pages = [
    {
        name: 'About Me',
        link: "about",
    },
    {
        name: 'Customers Say',
        link: "customers-say",
    },
    {
        name: 'Contact',
        link: "contact",
    },
]

function Navbar() {
  return (
    <div className="navbar-content-area">
        <div className="navbar-containers">
            <div className="navbar-page-titles-container">
                {/* <img src={logo} className="company-logo" alt="logo" /> */}
                <a href="about"><img src={logo} className="company-logo" alt="logo"/></a>
            </div>
            <div className="navbar-page-titles-container">
                {pages.map((item, index)=>{
                    return (
                        <a href="#"
                        key={index}
                        className="navbar-page-titles"
                        onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.link).scrollIntoView({
                            behavior: "smooth"
                        });
                        }}>{item.name}</a>
                    )        
                })}
            </div>
        </div>

    </div>
  );
}

export default Navbar;