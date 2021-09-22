import React from "react";
import Typed from "react-typed";

function Home() {
    return (
        <div className="homemain" id="home">
            <div className="leftdiv col-md-8 col-6">
            <div className="leftdiv-name">
                <div>
                <span>Hello</span>
                <h1  data-aos="fade-right">I'm Prem Singha</h1>
                <Typed
                    className="typing"
                    strings={[
                    'Front End Developer',
                    'Web Designer'
                     ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop 
                />

  
  <div class="btn-style">
    <a href="/"><span>HIRE ME</span></a>
  </div>


                </div>
        </div> 
        </div>
        <div className="rightdiv-img col-md-4 col-6">
            <div className="myphoto" data-aos="fade-left"></div> 
        </div>
        </div>
    )
}

export default Home
