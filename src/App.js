import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import Settings from './components/settings/settings';
import Music from './components/music/music';
import News from './components/news/news';
import Footer from './components/footer/footer';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-content'>
            <Routes>
                <Route
                    path="/profile"
                    element={<Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}
                />
                <Route
                    path="/dialogs"
                    element={<Dialogs
                        dialogsPage={props.state.dialogsPage}
                        dispatch={props.dispatch}
                    />}
                />
                <Route path="/news" element={<News/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/settings" element={<Settings/>}/>
            </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;