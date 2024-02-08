import React, { useState } from 'react';
import './profile.css';
import Scroll from "../scroll";

const Profile = () => {
    const [activeTab, setActiveTab] = useState('edu');
    const openTab = (tab) => {
        setActiveTab(tab);
    };
    return (
        <Scroll id="profile" >
            <div className="pcontainer">
                <div className="prow">
                    <div className="profile-col-1">
                        <h1>About Me</h1>
                        <p className='sub-para'>
                            Hey there! I am a final-year Computer Science diploma student eager to dive into the professional world. I have a passion for coding and problem-solving, and I am excited about contributing to dynamic projects. Let's connect and explore potential opportunities together!</p>
                        <br />
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
                                <li><span>Soft Skills</span><br />1. Able to contribute to group projects and share responsibilities within a team.
                                    <br />2. Flexibility to adjust to new situations and environments<br />3. Prioritizing tasks based on urgency and importance.</li>
                                <br />
                                <li><span>Language Proficiency</span><br />Malay<br />English</li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'exp' ? 'active-tab' : ''}`} id="exp">
                            <ul>
                                <h2>18 Sept 2023 - 01 March 2024</h2>
                                <li><span>Cyberjaya, Selangor</span><br />Internship at GFIS Innovative Solutions Sdn Bhd<br /></li>
                                <br />

                                <h2>29 - 31 Jan 2024</h2>
                                <li><span>Sheraton Imperial Hotel, Kuala Lumpur</span><br />Participate in the registration committee for Asia Navigator 2024</li>
                                <br />

                                <h2>08 April 2023</h2>
                                <li><span>Kangar, Perlis</span><br />The director of We Are One 2023 charity event, COSMITs</li>
                                <br />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Scroll >
    );
};

export default Profile;
