import React from "react";
import './intro.css';
import pdfFile from './Resume_NABILAH.pdf';
import profile from '../../img/profile.png';

const Intro = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.setAttribute('download', 'Nabilah-cv.pdf'); // Specify the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="intro">
            <div className="intro-img">
                <img className="intro-img" src={profile} alt="Profile" />
            </div>
            <div className="intro-1">
                <h3>Hello, I'm</h3>
                <div className="icontent">
                    <h4>NABILAH AHMAD FAUZI</h4>
                    <p>Welcome to my digital space!</p>
                    <p>Explore my passion for creativity and innovation through these projects. Each click unveils an interesting story. Enjoy your stay!</p>
                    <button className="resume" onClick={handleDownloadCV}>Get My Resume</button>
                </div>
            </div>

        </section >
    )
}

export default Intro;
