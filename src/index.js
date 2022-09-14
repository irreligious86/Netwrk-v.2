import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { addPost, updateNewPostText } from './redux/state';
import App from './App';
import {BrowserRouter} from "react-router-dom";
// import { subscribe } from './redux/state';
import state from './redux/state.js';

const rerenderEntireTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>
    );
};

rerenderEntireTree();

// subscribe(rerenderEntireTree);