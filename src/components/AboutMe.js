import '../App.css';
import AboutMeImage from '../assets/elias_working.jpeg';

function AboutMe() {
    return (
        <section id="about">
          <div className="section-title">
            About Me
          </div>
          <div className="about-me-and-image-container">
            <div className="about-me-image-container"> 
                <img src={AboutMeImage} className="about-me-image"></img>
            </div>
            <div className="about-me-text-container">
                <div className="about-me-bold-text">
                    Elias Uribe
                </div>
                <div className="about-me-text">
                    I'm a young entreprenuer who came to Bozeman Initially for rock climbing and outdoor scene. In 2020 I formulated my LLC and now have 4 employees who help me serve Bozeman and the greater areas. In my free time you can find me on the ski slopes or practicing jiujitsu.
                </div>
            </div>
          </div>
        </section>
    );
}

export default AboutMe