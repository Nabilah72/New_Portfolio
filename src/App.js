import React from 'react';
import Intro from './components/Intro/intro';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';
import Work from './components/Work/work';
import Contact from './components/Contact/contact';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Profile />
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;