import React from "react";
import Typed from "react-typed";
import Particles from 'react-particles-js';

function Home() {
    return (
        <div className="homemain">
            <div className="homediv">
        <h1>Yengkhom</h1>
                <Typed
                    className="typing"
                    strings={[
                    'Web Designer',
                    'Front End Developer',
                    'Digital Marketing']}
                    typeSpeed={40}
                    backSpeed={60}
                    loop 
                />
        </div> 
         <Particles
         params={{
             particles:{
                 number: {
                     value: 50,
                     density: {
                         enable: true,
                         value_area: 900
                     }
                 }
             }
         }
         }
         />   
        </div>
    )
}

export default Home
