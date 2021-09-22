import React, {useState, useEffect} from 'react'

function Portfolio() {

    const [arrays, setArrays] = useState([]);
    useEffect (()=> {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=2')
    .then(response => response.json())
    .then(json => setArrays(json))
    })

    return (
        <div id="portfolio" className="portfolio">
            <div className="container">
                <div className="col-md-12 text-center">
               <h2>Portfolio</h2>
               <span style={{color:"#fff"}}>Following data is fetching from json file</span>
                   <hr />

                   <div className="row">   
                          {
                              arrays.map(array => (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                              <div className="projects" style={{backgroundImage:`url(${array.thumbnailUrl})`}}>
                                  <h5> {array.title} </h5>
                              </div>
                              </div>
                              ))
                          }
                    </div>

                   </div> 
                   </div>
        </div>
    )
}

export default Portfolio
