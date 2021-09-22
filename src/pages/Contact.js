import React from 'react';
import Map from "../images/map.jpg";

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="container">
               <div className="col-md-4 col-12">
                   <img src={Map} alt="map"  />
               </div>
               <div className="col-md-8 col-12">
               <h2>Contact me</h2>
               <p>Love to hear from you</p>

               <form action="/action_page.php">
  <div className="form-group">
    <label for="email">Email address:</label>
    <input type="email" className="form-control" id="email" />
  </div>
  <div className="form-group">
    <label for="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" />
  </div>
  <div className="form-group">
    <label for="pwd">Message:</label>
    <textarea className="form-control" id="msg"></textarea>
  </div>
  <button type="submit" className="btn btn-danger">Submit</button>
</form>   
                   
               </div>
           </div>
        </div>
    )
}

export default Contact
