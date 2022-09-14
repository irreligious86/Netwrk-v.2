import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';

const rerenderEntireTree = () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <App
                // state={state}
                // addPost={addPost}
                // updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>
    );
};

rerenderEntireTree();
