import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rerenderEntireTree = () => {

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
            <App
                // state={state}
                // addPost={addPost}
                // updateNewPostText={updateNewPostText}
            />
    );
};

rerenderEntireTree();
