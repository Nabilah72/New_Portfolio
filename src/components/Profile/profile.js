import React, { useState } from 'react';
import './profile.css';
// import backgroundImg from '../../img/wallpaper.png'

const Profile = () => {
    const [activeTab, setActiveTab] = useState('edu');
    const openTab = (tab) => {
        setActiveTab(tab);
    };
    return (
        <section id="profile" >
            <div className="pcontainer">
                <div className="prow">
                    <div className="profile-col-1">
                        <h1>About Me</h1><br />
                        <p className='sub-para'> I am a practical trainee in the field of computer and information sciences at GFIS Sdn. Bhd. in order to experience the workplace environment as well as for self-development.</p>
                        <br /><br />
                        <div className="tab-titles">
                            <p className={`tab-subtitle ${activeTab === 'edu' ? 'p-active-link' : ''}`}
                                onClick={() => openTab('edu')}>
                                Education
                            </p>
                            <p className={`tab-subtitle ${activeTab === 'ski' ? 'p-active-link' : ''}`}
                                onClick={() => openTab('ski')}>
                                Skills
                            </p>
                            <p className={`tab-subtitle ${activeTab === 'exp' ? 'p-active-link' : ''}`}
                                onClick={() => openTab('exp')}>
                                Experience
                            </p>
                        </div>
                        <div className={`tab-contents ${activeTab === 'edu' ? 'active-tab' : ''}`} id="edu">
                            <ul>
                                <h2>Oct 2021 - Now</h2>
                                <li><span>Diploma In Computer Science</span><br />Dean List<br />Universiti Teknologi MARA (UiTM), Arau, Perlis</li>
                                <br />
                                <h2>Jan 2019 - March 2021</h2>
                                <li><span>SPM</span><br />6A <br />SMK Seri Indah, Sri Serdang</li>
                                <br />
                                <h2>Jan 2016 - Dec 2018</h2>
                                <li><span>PT3</span><br />4A <br />SMK Seri Indah, Sri Serdang</li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'ski' ? 'active-tab' : ''}`} id="ski">
                            <ul>

                                <li><span>Computer Skills</span><br />Javascript<br />HTML<br />CSS<br />React<br />C++</li>
                                <br />
                                <li><span>Soft Skills</span><br />Able to contribute to group projects and share responsibilities within a team.
                                    <br />Flexibility to adjust to new situations and environments<br />Prioritizing tasks based on urgency and importance.</li>
                                <br />
                                <li><span>Language Proficiency</span><br />Malay<br />English</li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'exp' ? 'active-tab' : ''}`} id="exp">
                            <ul>
                                <div className='box'>
                                    <h2>18 Sept 2023 - 01 March 2024</h2>
                                    <li><span>Cyberjaya, Selangor<br />Internship at GFIS Innovative Solutions Sdn Bhd</span><br /></li>
                                    <br />
                                </div>
                                <div className='box'>
                                    <h2>08 April 2023</h2>
                                    <li><span>Kangar, Perlis<br />The director of We Are One 2023 charity event, COSMITs</span></li>
                                    <br />
                                </div>
                                {/* <div className='box'>
                                    <h2>Year</h2>
                                    <li><span>Title3</span><br />desc3</li>
                                </div> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Profile;
