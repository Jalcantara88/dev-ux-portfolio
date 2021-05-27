import React, {useState} from 'react';
import {PROJECTS} from '../data/projects';



function Home() {

    const [selectedProject, setSelectedProject] = useState({});



    const projects = PROJECTS.map(item => {
        return(
            <div  key={item.id} className="bg-dark col-10 col-lg-5 col-xl-3 p-0 m-1 project-container">
                <img className="img-fluid project-image" src={item.thumb} alt={item.name}/>
                <div className="project-overlay">
                    <p className="project-text">
                        {item.name}
                    </p>
                </div>
            </div>
            
        );
    });

    return(
        <div className="my-5">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-8 col-lg-6 mx-auto intro-card p-5 text-dark rounded">
                        Hello I AM A Developer Focused On Making Cool Apps With Sleek Designs. Take a Look At My Portfolio And Tell Me What You Think.
                    </div>
                </div>
            </div>
            

            <div className="container-fluid mt-5">
                <div className="row justify-content-center">
                    {projects}
                </div>
            </div>
            
        </div>
    );
}

export default Home;