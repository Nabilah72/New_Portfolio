import React, { useState } from 'react';
import './profile.css';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('edu');

    const openTab = (tab) => {
        setActiveTab(tab);
    };
    return (
        <section id="profile">
            <div className="container">
                <div className="row">
                    <div className="profile-col-1">
                        <img src="" alt="" />
                    </div>

                    <div className="profile-col-2">
                        <h1>About Me</h1>
                        <p>Description</p>
                        <br /><br />
                        <div className="tab-titles">
                            <p
                                className={`tab-subtitle ${activeTab === 'edu' ? 'active-link' : ''}`}
                                onClick={() => openTab('edu')}
                            >
                                Education
                            </p>
                            <p
                                className={`tab-subtitle ${activeTab === 'ski' ? 'active-link' : ''}`}
                                onClick={() => openTab('ski')}
                            >
                                Skills
                            </p>
                            <p
                                className={`tab-subtitle ${activeTab === 'exp' ? 'active-link' : ''}`}
                                onClick={() => openTab('exp')}
                            >
                                Experience
                            </p>
                        </div>

                        <div className={`tab-contents ${activeTab === 'edu' ? 'active-tab' : ''}`} id="edu">
                            <ul>
                                <h2>2021 - 2024</h2>
                                <li><span>Diploma</span><br />desc1</li>
                                <br />
                                <h2>2015 - 2021</h2>
                                <li><span>SPM</span><br />desc2</li>
                                <br />
                                <h2>Year</h2>
                                <li><span>Title3</span><br />desc3</li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'ski' ? 'active-tab' : ''}`} id="ski">
                            <ul>
                                <li><span>Title1</span><br />desc1</li>
                                <br />
                                <li><span>Title2</span><br />desc2</li>
                                <br />
                                <li><span>Title3</span><br />desc3</li>
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'exp' ? 'active-tab' : ''}`} id="exp">
                            <ul>
                                <div className='box'>
                                    <h2>Year</h2>
                                    <li><span>Title1</span><br />desc1</li>
                                    <br />
                                </div>

                                <div className='box'>
                                    <h2>Year</h2>
                                    <li><span>Title2</span><br />desc2</li>
                                    <br />
                                </div>

                                <div className='box'>
                                    <h2>Year</h2>
                                    <li><span>Title3</span><br />desc3</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
