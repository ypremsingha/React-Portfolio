import React from 'react';
import Profile from "../images/prem-back.png";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

function About() {
    return (
        <div className="about" id="about">
           <div className="container">
               <div className="col-md-4 col-12">
                   <img className="about-profile " src={Profile} alt="profile" data-aos="fade-right" />
               </div>
               <div className="col-md-8 col-12">
               <h2>About me</h2>
               <p>A professional web designer with over 6 years of experience working 
                   with small to medium enterprises in New Zealand and India. A developer with vast 
                   expertise on front-end development involving HTML, CSS, Bootstrap, JavaScript, animations, 
                   and coding interactive layouts; along with commercial and open-source CMS like WordPress, 
                   Shopify and various other platforms for full-stack development.</p>
                   <div className="social" >
                       <ul>
                           <li>
                               <FaFacebook />
                           </li>
                           <li>
                               <FaInstagram/>
                           </li>
                           <li>
                               <FaTwitter />
                           </li>
                           <li>
                               <FaGithub />
                           </li>
                       </ul>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default About
