import './About.css';
import { Link } from 'react-router-dom';
const About=()=>{
    return (
        <div className='mainContainer'>
            <div className="textContainer">
                <h1>Our Team</h1>
                <p>Meet the dedicated team of Edulab, revolutionizing the way we farm with beautiful,innovative and sustainable solutions for easy Lab Manual access.</p>
            </div>
            <div className="imageContainer">
                <div className="sarthik">
                    <img className="myimg" src="images/Sarthik.png" alt="frontendDev" />
                    <h3>Sarthik Bangroo</h3>
                    <p>Front End Developer/UI UX</p>
                    <Link to="https://www.linkedin.com/in/sarthik-bangroo-b877a4250/" target='_blank'><img className='linkedinLogo' src="images/linkedin.png" alt="linkedin" /></Link>
                </div>
                <div className="chirag">
                    <img className='myimg' src="images/Chirag.png" alt="backenddev" />
                    <h3>Chirag Siroya</h3>
                    <p>Back End Developer</p>
                    <Link to="https://www.linkedin.com/in/sarthik-bangroo-b877a4250/" target='_blank'><img className='linkedinLogo' src="images/linkedin.png"  alt="linkedin" /></Link>
                    
                </div>
            </div>
            <hr />
        </div>
    )
}

export default About;