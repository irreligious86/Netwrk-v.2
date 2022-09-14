import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
// import Profile from './components/profile/profile';
// import Dialogs from './components/dialogs/dialogs';
// import Settings from './components/settings/settings';
// import Music from './components/music/music';
// import News from './components/news/news';
import Footer from './components/footer/footer';

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-content'></div>
        <Footer />
      </div>
  );
}

export default App;