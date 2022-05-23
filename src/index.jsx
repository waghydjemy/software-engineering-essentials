/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';

import { Router, Routes, Route } from "solid-app-router"
import SingleItem from './SingleItem';

render(() =>
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/SingleItem/:id" element={<SingleItem />} />
        </Routes>
    </Router>
    , document.getElementById('root'));
