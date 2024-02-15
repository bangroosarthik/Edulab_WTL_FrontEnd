import { Link } from "react-router-dom";
import './Footer.css'
const Footer=()=>{
    return (
        <>
            <div className="footer">
                <div className="Contact">
                    <div className="Address">
                        <img  className="logo" src="images/location.png" alt="location" />
                        <h1>Address</h1>
                        <p>Survey No. 27,<br /> Near Trimurti Chowk <br />
                        Dhankwadi, Pune - 411043</p>
                        <Link to="https://www.google.com/maps/place/SCTR'S+Pune+Institute+of+Computer+Technology/@18.4575421,73.8482587,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2eac85230ba47:0x871eddd0a8a0a108!8m2!3d18.4575421!4d73.8508336!16zL20vMDc3MTl3?entry=ttu" target="_blank">Google Maps Link</Link>
                    </div>
                    <div className="PhoneNumber">
                        <img className="logo" src="images/phone.png" alt="phone" />
                        <h1>Phone Number</h1>
                        <p>+91 20 24371101
                        <br />
                        Fax: +91 20 24364741</p>
                    </div>
                    <div className="Email">
                        <img className="logo" src="images/email.png" alt="email" />
                        <h1>Email</h1>
                        <p>registrar@pict.edu</p>
                    </div>
                </div>

                
            </div>

            <div className="footercontent">
                <hr />
                <p>© 2024 <Link to="/">Edulab</Link>. All Rights Reserved.</p>
                <p>Developed By <Link to="/About">&nbsp; EDULAB TEAM &nbsp;</Link> OF PICT</p>
                <hr />
            </div>
        </>
    )
}

export default Footer;