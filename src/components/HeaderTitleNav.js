import '../App.css';
import Navbar from './Navbar.js';
import backgroundImage from '../assets/roof_landscape_wide_background_touched.jpeg';

function HeaderTitleNav(){
    return (
      <header>
        <div className="header-background-image-container"> 
          <Navbar />
          <img src={backgroundImage} className="header-background-image"></img>
          <div className="background-text">
            Serving the Greater Bozeman Area
          </div>
        </div>
      </header>
    )
}

export default HeaderTitleNav