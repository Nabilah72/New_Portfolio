import React, { useState } from 'react';
import './work.css';
import workImg1 from '../../img/cat.jpg';
import workImg2 from '../../img/cat.jpg';
import workImg3 from '../../img/cat.jpg';
import workImg4 from '../../img/cat.jpg';

const projectData = [
  { image: workImg1, title: 'DIGITAL BROCHURE', info: 'I crafted a company brochure for Asia Navigator 2024 using Reveal.Js. After creating a detailed plan and converting it to code, I deployed it on GitHub and Netlify. Additionally, I designed event buntings with Canva and AI images using Bing AI.', code: 'https://github.com/yourusername/project1', view: '' },
  { image: workImg2, title: 'PORTFOLIO WEBSITE', info: 'This project is my professional showcase, demonstrating skills for job opportunities. It reflects my commitment to growth in web development, leaving a lasting impression.', code: 'link', view: '' },
  { image: workImg3, title: 'PHOTOBOOTH APP', info: 'I made a photo booth app for a Family Day event on November 11, 2023. I added some features and functions to capture the beauty of the picture to be kept as a memories.', code: 'https://github.com/Nabilah72/Photobooth-App', view: 'https://photoboothapp.netlify.app/' },
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
    <section id="work">
      <h1>My Work</h1>
      <p className="sub-para">Let's explore a collection of projects I have worked on throughout my career.</p>

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
    </section>
  );
};

export default Work;