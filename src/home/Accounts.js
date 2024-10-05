// Accounts.js
import React, { useEffect, useState } from 'react';
import { getAllAccounts } from './ApiSpringboot'; // Import API
import { Table, Space } from 'antd'; // Import các thành phần cần thiết từ Ant Design

function Accounts() {
    const [accounts, setAccounts] = useState([]); // Trạng thái lưu trữ dữ liệu accounts

    useEffect(() => {
        // Gọi API lấy dữ liệu khi component được mount
        getAllAccounts()
            .then((data) => {
                console.log('Dữ liệu accouns:', data); // Log dữ liệu để kiểm tra
                setAccounts(data); // Lưu dữ liệu vào state
            })
            .catch((error) => console.error('Lỗi khi lấy dữ liệu:', error));
    }, []);

    // Cấu hình các cột của bảng
    const columns = [
        {
            title: 'Username',
            dataIndex: 'username', // Dữ liệu tương ứng với trường "username"
            key: 'username',
        },
        {
            title: 'Password',
            dataIndex: 'password', // Dữ liệu tương ứng với trường "password"
            key: 'password',
        },
        {
            title: 'Fullname',
            dataIndex: 'fullname', // Dữ liệu tương ứng với trường "fullname"
            key: 'fullname',
        },
        {
            title: 'Email',
            dataIndex: 'email', // Dữ liệu tương ứng với trường "email"
            key: 'email',
        },
        {
            title: 'Photo',
            dataIndex: 'photo', // Dữ liệu tương ứng với trường "photo"
            key: 'photo',
            render: (photo) => <img src={photo} alt="profile" width="50" />, // Hiển thị ảnh
        },
        {
            title: 'Token',
            dataIndex: 'token', // Dữ liệu tương ứng với trường "token"
            key: 'token',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a>Delete</a> {/* Hành động xoá */}
                </Space>
            ),
        },
    ];

    return (
        <div className="accounts-container">
            <h2>Quản lý Tài Khoản</h2>
            {/* Hiển thị bảng với dữ liệu từ API */}
            <Table columns={columns} dataSource={accounts} rowKey="username" />
        </div>
    );
}

export default Accounts;
