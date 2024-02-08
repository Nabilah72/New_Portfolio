import React, { useState } from 'react';
import Scroll from "../scroll";
import './work.css';
import workImg1 from '../../img/portfolio-img.png';
import workImg2 from '../../img/photobooth-img.png';
import workImg3 from '../../img/brochure-img.png';

const projectData = [
  { image: workImg1, title: 'PORTFOLIO WEBSITE', info: 'This project is my professional showcase, demonstrating skills for job opportunities. It reflects my commitment to growth in web development, leaving a lasting impression.', code: 'https://github.com/Nabilah72/New_Portfolio', view: 'https://portfolio-72.netlify.app/' },
  { image: workImg2, title: 'PHOTOBOOTH APP', info: 'I made a photo booth app for a Family Day event on November 11, 2023. I added some features and functions to capture the beauty of the picture and keep it as a memory.', code: 'https://github.com/Nabilah72/Photobooth-App', view: 'https://photoboothapp.netlify.app/' },
  { image: workImg3, title: 'DIGITAL BROCHURE', info: 'I crafted a company brochure for Asia Navigator 2024 using Reveal.Js. After creating a detailed plan and converting it to code, I deployed it on GitHub and Netlify. Additionally, I designed event buntings with Canva and AI images using Bing AI.', code: 'https://github.com/Nabilah72/New-Brochure', view: 'https://brochure2024.netlify.app/' },
  // { image: workImg4, title: '', info: 'text4', code: 'link', view: '' },
];

const Work = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const handleNext = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % 3);
    setIsInfoVisible(false);
  };

  const handlePrev = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + 3) % 3);
    setIsInfoVisible(false);
  };

  const toggleDescription = () => {
    setIsInfoVisible((prevValue) => !prevValue);
  };

  const transformValue = `translateX(${-currentCard * 100}%)`;

  return (
    <Scroll id="work">
      <h1>My Work</h1>
      <p className="sub-para">Let's explore a collection of projects I have worked on throughout my career. These demonstrate my skills and achievements. I look forward to discussing them with you.</p><br/>
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
                <br /><button onClick={() => window.open(project.code, '_blank')} className="link-button">
                  Source Code
                </button>
                <button onClick={() => window.open(project.view, '_blank')} className="link-button">
                  View Preview
                </button>
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