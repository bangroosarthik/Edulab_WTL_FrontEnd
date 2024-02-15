import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <div className="mainHero">
        <div className="HeroContent">
          <img src="./images/pictlogo.png" alt="" />
          <div className="SCTR">
            Society for Computer Technology and Research's
          </div>
          <div className="PICT">PUNE INSTITUTE OF COMPUTER TECHNOLOGY</div>
          <div className="Sppu">
            (An Autonomous Institute affiliated to Savitribai Phule Pune
            University)
          </div>
          <div className="Aicte">
            AICTE APPROVED | ISO 9001:2015 | NAAC A+ Grade | NBA [All Eligible
            UG Programs]
          </div>
        </div>
      </div>

      <div className="heroHeader">
            <div className="heroItems">
            <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/About"><li>About Us</li></Link>
                <li className="nav-item dropdown">
                <Link to="/Departments" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Departments
                </Link>
                <ul className="dropdown-menu">
                    <li><Link to="/CE" className="dropdown-item" href="#">CE</Link></li>
                    <li><Link to="/IT" className="dropdown-item" href="#">IT</Link></li>
                    <li><Link to="/ENTC" className="dropdown-item" href="#">ENTC</Link></li>
                </ul>
                </li>
            </ul>
            </div>
      </div>


    </>
  );
};

export default Hero;

