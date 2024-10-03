import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App'; // Trang đăng nhập
import Home from './home/home'; // Trang chính sau đăng nhập
import Accounts from './home/Accounts'; // Import component Accounts
import Datdp from "./home/Datdp";

function Main() {
    return (
        <Routes>
            <Route path="/" element={<App />} /> {/* Trang đăng nhập */}
            <Route path="/home" element={<Home />}> {/* Trang chính với layout chứa sidebar */}
                {/* Các route con nằm trong /home */}

                <Route path="accounts" element={<Accounts />} /> {/* Route cho Accounts */}
                <Route path="d" element={<Datdp />} />
            </Route>
        </Routes>
    );
}

export default Main;
