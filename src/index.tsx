import React from 'react';
import * as ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import Login from './login';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
    <BrowserRouter>
        <Login />
    </BrowserRouter>
);

reportWebVitals();