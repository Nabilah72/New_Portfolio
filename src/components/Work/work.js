import React, { useState } from 'react';
import Scroll from "../scroll";
import './work.css';
import workImg1 from '../../img/portfolio-img.png';
import workImg2 from '../../img/photobooth-img.png';
import workImg3 from '../../img/brochure-img.png';
import workImg4 from '../../img/PTAlogo-img.png';
import workImg5 from '../../img/PTAdemo-img.png';

const projectData = [
  { image: workImg5, title: 'PTA SIMULATION VIDEO', info: 'This video was created using Powtoon to show the process of the Push to Alert System for end-users. This will help the user understand the flow of the system process and the estimated time it will take for KKM staff to arrive at the hospital. ', view: 'https://www.youtube.com/watch?v=p-jjWWIgy0k' },
  { image: workImg4, title: 'PTA LOGO', info: 'The logo for PTA was created by using Canva and Adobe Illustrator. This logo symbolises an emergency button being pushed while the heart sign represents the KKM.', download: 'pta-logo.png' },
  { image: workImg3, title: 'DIGITAL BROCHURE', info: 'A company brochure for Asia Navigator 2024 was created by using Reveal.Js. The brochure contains the agenda of the event and the business information of the company. This project was made by my team, and we contributed to creating the mockup design and inputting the latest information of the company.', view: 'https://brochure2024.netlify.app/', code: 'https://github.com/Nabilah72/New-Brochure' },
  { image: workImg2, title: 'PHOTOBOOTH APP', info: 'A photobooth app for a Family Day event on November 11, 2023, by using ReactJS. I added some features and functions to capture the beauty of the picture and keep it as a memory.', view: 'https://photoboothapp.netlify.app/', code: 'https://github.com/Nabilah72/Photobooth-App' },
  { image: workImg1, title: 'MY PORTFOLIO', info: 'This project is my professional showcase and demonstrating skills for job opportunities. It reflects my commitment to growth in web development and leaving a lasting impression.', view: 'https://portfolio-72.netlify.app/', code: 'https://github.com/Nabilah72/New_Portfolio' },
];

const Work = () => {

  const ptalogo = () => {
    const link = document.createElement('a');
    link.href = workImg4;
    link.setAttribute('download', 'pta-logo.png'); // Specify the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [currentCard, setCurrentCard] = useState(0);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % 5);
    setIsInfoVisible(false);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + 5) % 5);
    setIsInfoVisible(false);
  };

  const toggleDescription = () => {
    setIsInfoVisible((prevValue) => !prevValue);
  };

  const transformValue = `translateX(${-currentCard * 100}%)`;

  return (
    <Scroll id="work">
      <h1>My Work</h1>
      <p className="sub-para">Let's explore a collection of projects I have worked on throughout my career. These demonstrate my skills and achievements. I look forward to discussing them with you.</p><br />
      <div className="slider">
        <button className="w-prev" onClick={handlePrev}>
          &lt;
        </button>
        <div className="cards" style={{ transform: transformValue }}>
          {projectData.map((project, index) => (

            <div key={index} className={`w-card ${currentCard === index ? 'open' : ''}`}>
              <img src={project.image} alt={project.title} />

              <div className="card-info">
                <h5>{project.title}</h5>
                <div className={`arrow-icon ${isInfoVisible ? 'arrow-up' : 'arrow-down'}`} onClick={toggleDescription}>
                  {isInfoVisible ? '▲' : '▼'} More Info
                </div>

                {isInfoVisible && (
                  <div className="card-description">
                    {project.info}
                  </div>
                )}

                {project.download && (
                  <button onClick={ptalogo} className='download-button'>Download</button>
                )}

                {project.view && (
                  <button onClick={() => window.open(project.view, '_blank')} className="link-button">
                    Preview
                  </button>
                )}

                {project.code && (
                  <button onClick={() => window.open(project.code, '_blank')} className="link-button">
                    Source Code
                  </button>
                )}

                {project.video && (
                  <video width="320" height="240" controls>
                    <source src={require(`../../img/${project.video}`).default} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

              </div>
            </div>
          ))}
        </div>
        <button className="w-next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </Scroll>
  );
};

export default Work;