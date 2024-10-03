// Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
            <h2>ShoeSvip</h2>
            <ul>
                <li>
                    <NavLink to="dashboard" activeClassName="active">
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="accounts" activeClassName="active">
                        Quản lý Tài Khoản
                    </NavLink>
                </li>
                <li>
                    <NavLink to="orders" activeClassName="active">
                        Đơn Hàng
                    </NavLink>
                </li>
                <li>
                    <NavLink to="sales" activeClassName="active">
                        Bán Hàng
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
