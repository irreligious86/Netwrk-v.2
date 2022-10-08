import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from './redux/redux-store';
import StoreContext, {Provider} from "./store-context";

export let rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
    rerenderEntireTree(store.getState());
});