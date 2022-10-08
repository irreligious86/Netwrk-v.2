import React from 'react';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Profile from './components/profile/profile';
import Settings from './components/settings/settings';
import Music from './components/music/music';
import News from './components/news/news';
import Footer from './components/footer/footer';
import DialogsContainer from "./components/dialogs/dialogs-container";

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
                        // dispatch={props.dispatch}
                        // store={props.store}
                    />}
                />
                <Route
                    path="/dialogs"
                    element={<DialogsContainer
                        // store={props.store}
                        // dispatch={props.dispatch}
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