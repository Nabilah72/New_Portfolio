import React from 'react';
import Intro from './components/Intro/intro';
import Navbar from './components/Navbar/navbar';
import Profile from './components/Profile/profile';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Profile />
    </div>
  );
}

export default App;
