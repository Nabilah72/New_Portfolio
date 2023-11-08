import React from "react";
import './intro.css';
import pdfFile from './Resume_NABILAH.pdf'; // Import or specify the path to your PDF file

const Intro = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = pdfFile;
        link.setAttribute('download', 'your-cv.pdf'); // Specify the desired file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">HELLOOOOOOO,</span>
                <span className="introText">I'M <span className="introName">NABILAH</span>
                </span>
                <p className="introPara">Description<br/><br/>
                <button className="btn" onClick={handleDownloadCV}>Download CV</button>
            </p>
        </div>
        </section >
    )
}

export default Intro;
