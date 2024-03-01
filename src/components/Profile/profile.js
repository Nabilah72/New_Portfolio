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
                                <h2>Oct 2021 - March 2024</h2>
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

                                <li><span>Programming Skills</span><br /><br /><i className='bx bxl-javascript icon' style={{ color: '#f2dc55' }}></i>
                                    <i className='bx bxl-html5 icon' style={{ color: '#dd4b25' }} ></i><i className='bx bxl-css3 icon' style={{ color: '#1b6fb4' }}></i><i className='bx bxl-c-plus-plus icon' style={{ color: '#0984cf' }}  ></i><i className='bx bxl-bootstrap icon' style={{ color: '#8512f7' }}  ></i></li>
                                <br />
                                <li><span>Software Skills</span><br />Canva <br />Microsoft Bing<br />Microsoft Word<br />Image Upscaler<br />Adobe Photoshop</li>
                                <br />
                                <li><span>Soft Skills</span><br />1. Able to contribute to group projects and share responsibilities within a team.
                                    <br />2. Flexibility to adjust to new situations and environments<br />3. Prioritizing tasks based on urgency and importance.</li>
                                <br />
                                <li><span>Language Proficiency</span><br />Malay<br />English</li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'exp' ? 'active-tab' : ''}`} id="exp">
                            <ul>
                                <h2>30 & 31 Jan 2024</h2>
                                <li><span>Sheraton Imperial Hotel, Kuala Lumpur</span><br />Participate in the registration committee for Asia Navigator 2024</li>
                                <br />
                                <h2>18 Sept 2023 - 01 March 2024</h2>
                                <li><span>Cyberjaya, Selangor</span><br />Internship as Associate Software Engineer at GFIS Innovative Solutions Sdn Bhd<br /></li>
                                <br />
                                <h2>08 April 2023</h2>
                                <li><span>Padang Katong, Kangar, Perlis</span><br />The director of We Are One programme, a charity event under the COSMITs</li>
                                <br />
                                <h2>24 July 2022</h2>
                                <li><span>Uitm Arau, Perlis</span><br />The Deputy Secretary of COSMITs under the College of Computing, Informatics and Mathematics.</li>
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
