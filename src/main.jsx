import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store";
import "./index.css";
import Nav from "./components/navbar/Navbar";

ReactDOM.createRoot(document.body).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
            <Nav />
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
