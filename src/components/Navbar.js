import logo from '../assets/logo.png';

const pages = [
    {
        name: 'About Me',
        link: '/about',
    },
    {
        name: 'What Customers Say',
        link: '/customers-say',
    },
    {
        name: 'Contact',
        link: '/contact',
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
                    return <a href={item.link} key={index} className="navbar-page-titles">{item.name}</a>
                })}
            </div>
        </div>

    </div>
  );
}

export default Navbar;