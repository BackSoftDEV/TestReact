// home.js
import React, {useState, useEffect} from 'react';
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import {Button, Menu} from 'antd';
import {Outlet, useNavigate, useLocation} from 'react-router-dom'; // Thêm Outlet để hiển thị route con
import './home.css'; // Import file CSS tùy chỉnh

const items = [{
    key: '1', icon: <PieChartOutlined/>, label: 'Quản Lý Accounts',
}, {
    key: '2', icon: <DesktopOutlined/>, label: 'Thống kê',
}, {
    key: '3', icon: <ContainerOutlined/>, label: 'Option 3',
}, {
    key: 'sub1', label: 'Navigation One', icon: <MailOutlined/>, children: [{
        key: '5', label: 'Option 5',
    }, {
        key: '6', label: 'Option 6',
    }, {
        key: '7', label: 'Option 7',
    }, {
        key: '8', label: 'Option 8',
    },],
}, {
    key: 'sub2', label: 'Navigation Two', icon: <AppstoreOutlined/>, children: [{
        key: '9', label: 'Option 9',
    }, {
        key: '10', label: 'Option 10',
    }, {
        key: 'sub3', label: 'Submenu', children: [{
            key: '11', label: 'Option 11',
        }, {
            key: '12', label: 'Option 12',
        },],
    },],
},];

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate(); // Sử dụng hook useNavigate để điều hướng
    const location = useLocation(); // Lấy thông tin về đường dẫn hiện tại
    const [selectedKeys, setSelectedKeys] = useState(['2']); // Quản lý trạng thái của mục được chọn
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    useEffect(() => {
        // Điều chỉnh mục được chọn dựa trên đường dẫn
        if (location.pathname === '/home/accounts') {
            setSelectedKeys(['1']);
        } else if (location.pathname === '/home/d') {
            setSelectedKeys(['2']);
        }
    }, [location]);
    useEffect(() => {
        // Điều hướng mặc định đến /home/d khi trang home được load lần đầu
        if (location.pathname === '/home') {
            navigate('/home/d');
        }
    }, [location, navigate]);

    const onMenuClick = (e) => {
        if (e.key === '1') {
            // Điều hướng đến trang /home/accounts khi người dùng nhấn vào "Quản Lý Accounts"
            navigate('/home/accounts');
        } else if (e.key === '2') {
            navigate('/home/d');
        }
        // Bạn có thể thêm điều kiện tương tự cho các mục khác
    };

    return (<div style={{display: 'flex'}}>
        <div style={{width: 256}}>
            <Button
                type="primary"
                onClick={toggleCollapsed}
                style={{marginBottom: 16}}
            >
                {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </Button>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={items}
                onClick={onMenuClick} // Thêm sự kiện click vào Menu
            />
        </div>
        <div style={{flex: 1, padding: '20px'}}>
            <Outlet/> {/* Hiển thị route con ở đây */}
        </div>
    </div>);
};

export default Home;
