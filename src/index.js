import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import state, {subscribe} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, updateNewPostText} from "./redux/state";

export let rerenderEntireTree = (state) => {
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

rerenderEntireTree(state);

subscribe(rerenderEntireTree);